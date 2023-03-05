import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@material-ui/core";
import "./MovieDetails.css";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movie = useSelector((store) => store.movieItem);
  const genres = useSelector((store) => store.genres);
  const { id } = useParams();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    deleteMovie(movie.id);
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  useEffect(() => {
    // console.log("id ===== ", id);
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
        <div className="poster-container">
          <h2>More about this movie...</h2>
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
            <p>{movie.description}</p>
          </div>
          <div>
            <div className="button-container">
              <Button
                variant="outlined"
                color="error"
                onClick={handleDeleteClick}
              >
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
        </div>
      )}
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Movie?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
