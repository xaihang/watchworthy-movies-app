import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movie = useSelector((store) => store.movieItem);
  const genres = useSelector((store) => store.genres);
  const { id } = useParams();

  useEffect(() => {
    console.log('id ===== ', id);
    dispatch(
        { type: 'FETCH_MOVIE', payload: id }
    );
  }, []);

  useEffect(() => {
    // dispatch({ type: "FETCH_MOVIE_GENRES", payload: id });
  }, [movie]);

  return (
    <div>
      {movie && (
        <div>
          <h4>MOVIE DETAILS</h4>
          <img src={movie.poster} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            <ul>
              {genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h5>{movie.description}</h5>
          </div>
          <div>
            <button onClick={() => history.push("/")}>Home</button>
          </div>
        </div>
      )}
    </div>
  );
}
