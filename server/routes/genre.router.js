const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.get('/:id', (req, res) => {

  const movieId = req.params.id;
  if (!movieId) {
    console.log('Movie id is undefined');
    res.sendStatus(400);
    return;
  }

  // const movieId = req.params.id;
  const queryText = `
    SELECT genres.id, genres.name
    FROM genres
    JOIN movies_genres ON genres.id = movies_genres.genre_id
    WHERE movies_genres.movie_id = $1;
  `;
  pool.query(queryText, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting genres', error);
      res.sendStatus(500);
    });
});

module.exports = router;