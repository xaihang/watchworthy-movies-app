import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import "./AddMovie.css";

export default function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();
  const SearchOmdbApi = useSelector((store) => store.SearchOmdbApi);

  const savedMovie = {
    title: SearchOmdbApi.Title,
    poster: SearchOmdbApi.Poster,
    description: SearchOmdbApi.Plot,
    genres: SearchOmdbApi.Genre,
  };

  const saveMovie = () => {
    console.log('savedMovie ==== ', savedMovie);
    dispatch({ type: "SAVE_MOVIE", payload: savedMovie });
    history.push("/");
  };

  return (
    <Paper className="add-movie-container">
      <div className="poster-container">
      <h2>Add to my movie collection?</h2>
        <img src={SearchOmdbApi.Poster} alt={SearchOmdbApi.title} />
      </div>
      <h3>{SearchOmdbApi.Title}</h3>
      <h4>{SearchOmdbApi.Genre}</h4>
      <p>{SearchOmdbApi.Plot}</p>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={() => saveMovie()}>
          Save
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/")}
        >
          Back to List
        </Button>
      </div>
    </Paper>
  );
}
