const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const { getGenres, insertGenres, insertMovieGenres } = require("./crud/sql.crud");

//! GET: router to provide the complete list of movie objects
router.get("/", (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

//! GET selected movie by id
router.get("/:id", (req, res) => {
  let id = req.params.id;
  // console.log("GET from movie; id == ", id);
  const query = `
  SELECT * FROM movies 
  WHERE ID = ${id}
  ORDER BY "title" DESC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

//! POST:
router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(async result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    let movieGenres = req.body.genres.split(',');

    let searchGenreResults = await getGenres(movieGenres);

    let resultNameOnlyList = searchGenreResults.rows.map((row) => {return row.name});
    let genreListNeedToAddToDatabase = genreIdList.filter( genre => !resultNameOnlyList.includes(genre));

    if (genreListNeedToAddToDatabase.length > 0) {
      await insertGenres(genreListNeedToAddToDatabase);
      // call search genres result again for update
      searchGenreResults = await getGenres(movieGenres);
    }

    console.log('reach here 1 =========');
    // Now handle the genre reference
    for ( let i = 0; i < searchGenreResults.length ; i++ ) {
      let currentGenreId = searchGenreResults[i].id;
      await insertMovieGenres({movieId: createdMovieId, genreId: currentGenreId});
    }

    res.sendStatus(201);

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

//! DELETE saved movie from database 
router.delete('/:id', (req, res) => {
  const idToDelete = req.params.id
  const queryText = `
    DELETE FROM movies
    WHERE id=$1
  `
  const values = [idToDelete]
  pool.query(queryText, values)
      .then(response => {
        res.sendStatus(200);
      }).catch(err => {
        console.log('Error on delete: ', err);
        res.sendStatus(500)
      })
  });

module.exports = router;
