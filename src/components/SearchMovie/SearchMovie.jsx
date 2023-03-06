import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "./SearchMovie.css";

export default function SearchMovie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchError = useSelector(state => state.search.error); // get the search error message from the redux store


  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  const handleClick = () => {
    if (searchError) {
      alert(searchError);
    } else {
      dispatch({
        type: "FETCH_OMDBAPI_RESULTS",
        payload: {
          title,
          year,
          description,
          genre,
        },
      });
    }

    setTitle("");
    setYear("");
    setDescription("");
    setGenre("");

    history.push("/addmovie");
  };

  console.log(title, year, description, genre);

  return (
    <div className="form-container">
      {searchError && ( // display the error message if it exists
        <div className="error-message">
          {searchError}
        </div>
      )}
      <form>
        <TextField
          label="Movie Title"
          variant="outlined"
          size="medium"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          className="form-textfield"
        />

        <Button
          className="search-button"
          variant="outlined"
          onClick={() => handleClick()}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
