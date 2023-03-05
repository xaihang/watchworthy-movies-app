import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";


function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <div>
      <Paper elevation={3} className="movies">
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </Paper>
      </div>
    </main>
  );
}

export default MovieList;
