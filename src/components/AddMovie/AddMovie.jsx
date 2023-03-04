import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();
  const SearchOmdbApi = useSelector((store) => store.SearchOmdbApi);

  const savedMovie = {
    title: SearchOmdbApi.Title,
    poster: SearchOmdbApi.Poster,
    description: SearchOmdbApi.Plot,
    genre_id: 1,
  };

  const saveMovie = () => {
    dispatch({ type: "SAVE_MOVIE", payload: savedMovie });
    history.push("/");
  };

  return (
    <div>
      <h2>Add Movie page</h2>
      <img src={SearchOmdbApi.Poster} alt={SearchOmdbApi.title} />
      <h3>{SearchOmdbApi.Title}</h3>
      <h4>{SearchOmdbApi.Plot}</h4>
      <div>
        <button onClick={() => saveMovie()}>Save Movie</button>
        <button onClick={() => history.push("/")}>Home</button>
      </div>
    </div>
  );
}
