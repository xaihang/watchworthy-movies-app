import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function SearchMovie() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: "FETCH_OMDBAPI_RESULTS",
      payload: {
        title,
        year,
        description,
        genre,
      },
    });

    setTitle("");
    setYear("");
    setDescription("");
    setGenre("");
  };

  console.log(title, year, description, genre);

  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="movie title..."
        />
        <button onClick={() => history.push("/addmovie")}>Search!</button>
      </form>
    </div>
  );
}
