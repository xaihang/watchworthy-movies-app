import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movie = useSelector((store) => store.movieItem);
  const genres = useSelector((store) => store.genres);
  const { id } = useParams();

  useEffect(() => {
    console.log("id ===== ", id);
    dispatch({ type: "FETCH_MOVIE", payload: id });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIE_GENRES", payload: id });
  }, [movie]);

  //dispatch DELETE movie from table
  const deleteMovie = (idToDelete) => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: idToDelete,
    });
    history.push("/");
  };

  return (
    <Paper className="movie-details-container">
      {movie && (
        <div>
          <h3>More about this movie...</h3>
          <img src={movie.poster} alt={movie.title} />
          <div>
            <h2>{movie.title}</h2>
            {genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
            <h5>{movie.description}</h5>
          </div>
          <div>

            {/* <button onClick={() => deleteMovie(movie.id)}>Delete</button> */}
           
            <Button variant="contained" color="error" onClick={() => deleteMovie(movie.id)}>
          Delete
        </Button>

            <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/")}
        >
          Back to List
        </Button>
          
          </div>
        </div>
      )}
    </Paper>
  );
}
