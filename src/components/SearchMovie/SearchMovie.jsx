import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import "./SearchMovie.css";

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
    <div className="form-container">
      <form onSubmit={(e) => handleClick(e)}>
        <TextField
          label="Movie Title"
          variant="outlined"
          size="medium"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-textfield"
        />

        <Button
          className="search-button"
          variant="outlined"
          onClick={() => history.push("/addmovie")}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

//! original code that works:
// return (
//   <div>
//     <form onSubmit={(e) => handleClick(e)}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="movie title..."
//       />
//       <button onClick={() => history.push("/addmovie")}>Search!</button>
//     </form>
//   </div>
// );

// return (
//   <div>
//     <form onSubmit={(e) => handleClick(e)}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="movie title..."
//       />
//       <button onClick={() => history.push("/addmovie")}>Search!</button>
//     </form>
//   </div>
// );

// material ui stuff:

// return (
//   <div>
//     <form onSubmit={(e) => handleClick(e)}>
//       <TextField
//         label="Movie Title"
//         variant="outlined"
//         size="medium"
//         fullWidth
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ marginBottom: 20 }}
//       />
// <TextField
//   label="Genre"
//   variant="outlined"
//   size="medium"
//   fullWidth
//   value={genre}
//   onChange={(e) => setGenre(e.target.value)}
//   style={{ marginBottom: 20 }}
// />
// <TextField
//   label="Year"
//   variant="outlined"
//   size="medium"
//   fullWidth
//   value={year}
//   onChange={(e) => setYear(e.target.value)}
//   style={{ marginBottom: 20 }}
// />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => history.push("/addmovie")}
//         style={{ textTransform: "none", borderRadius: 20, padding: "10px 30px", marginLeft: 20 }}
//       >
//         Search
//       </Button>
//     </form>
//   </div>
// );
