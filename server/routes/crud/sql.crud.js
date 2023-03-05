
export const insertGenres = async (genreList) => {

  if (genreList.length === 0) {
    return false;
  }
  // Now handle the genre Insert
  let insertsMovieGenreQuery = `
    INSERT INTO "genres" ("name")
    VALUES`;

  genreList.map((value, index) => {
    if (index > 0) {
      insertsMovieGenreQuery += ",";
    }
    insertsMovieGenreQuery += ` ($${index + 1})`;
  });

  insertsMovieGenreQuery += ";";

  // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
  let result = await pool.query(insertsMovieGenreQuery, genreList);
  return true;
};

export const insertMovieGenres = async ({movieId, genreId}) => {

    console.log('reach here 2 =========');
    const insertMovieGenreQuery = `
    INSERT INTO "movies_genres" ("movie_id", "genre_id")
    VALUES  ($1, $2);
    `
    // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
    await pool.query(insertMovieGenreQuery, [movieId, genreId]);
}

export const getGenres = async (genreList) => {
  let genreIdList = [];
  let searchGenresQuery = "";
  for (let i = 0; i < genreList.length; i++) {
    if (i !== 0) {
      searchGenresQuery += ",";
    }
    let currentGenre = genreList[i].trim();
    genreIdList.push(currentGenre);
    searchGenresQuery += `'${currentGenre}'`;
  }
  // console.log('genreIdList == ', genreIdList);
  // console.log('searchGenresQuery == ', searchGenresQuery);
  const verifyGenreQuery =
    `SELECT * FROM "genres" WHERE NAME in (` + searchGenresQuery + `);`;

  // console.log('verifyGenreQuery == ', verifyGenreQuery);

  // Now handle the genre reference

  // SECOND QUERY VERIFY IF GENRES IS IN DATABASE
  let result = await pool.query(verifyGenreQuery);
  return result;
};
