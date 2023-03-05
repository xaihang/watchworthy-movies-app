
//! this file is created to manipulating sql to inject query into database

// import pool here so we can call to database
const pool = require("../../modules/pool");

// create genres
const createGenres = async (genreList) => {
  if (genreList.length === 0) {
    return false;
  }
  // Now handle the genre Insert
  let insertsMovieGenreQuery = `
        INSERT INTO "genres" ("name")
        VALUES`;
  // loop through the genres list to append the values query
  genreList.map((value, index) => {
    if (index > 0) {
      insertsMovieGenreQuery += ",";
    }
    insertsMovieGenreQuery += ` ($${index + 1})`;
  });
  // closing the query 
  insertsMovieGenreQuery += ";";

  // calling the database
  await pool.query(insertsMovieGenreQuery, genreList);
  return true;
};

// create the movie genres 
const createMovieGenres = async ({ movieId, genreId }) => {
  // console.log("reach here 2 =========");

  // querytext for sql 
  const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" ("movie_id", "genre_id")
        VALUES  ($1, $2);
        `;
  // calling the database with querytext with movie id and genre id 
  await pool.query(insertMovieGenreQuery, [movieId, genreId]);
};

// get the genres from database 
const getGenres = async (genreList) => {
   // initializing the prefix query 
  let searchGenresQuery = "";
  // looping through the query and concatinating the variables to the prefix query 
  for (let i = 0; i < genreList.length; i++) {
    if (i !== 0) {
      searchGenresQuery += ",";
    }
    let currentGenre = genreList[i];
    searchGenresQuery += `'${currentGenre}'`;
  }
  // console.log('searchGenresQuery == ', searchGenresQuery);

  // concatinating the final query with the prefix query and closing query
  const verifyGenreQuery =
    `SELECT * FROM "genres" WHERE NAME in (` + searchGenresQuery + `);`;

  // console.log('verifyGenreQuery == ', verifyGenreQuery);

  // final query result (final + prefix) to the database  
  let result = await pool.query(verifyGenreQuery);
  return result;
};

// packaging the functions of sql crud and export 
const sqlCrud = {
  createGenres,
  createMovieGenres,
  getGenres
};

// export module 
module.exports = sqlCrud;
