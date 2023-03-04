import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";

// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";

// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE", fetchMovie);
  yield takeEvery("FETCH_OMDBAPI_RESULTS", fetchResultsFromOmdbapi);
  yield takeEvery("SAVE_MOVIE", saveMovie);
  yield takeEvery("FETCH_MOVIE_GENRES", fetchMovieGenres);
}

// get all movies from the DB
function* fetchAllMovies() {
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

// GET single movie details from DB
function* fetchMovie(action) {
  try {
    let id = action.payload;
    const singleMovie = yield axios.get(`/api/movie/${id}`);
    yield put({ type: "SET_MOVIE", payload: singleMovie.data });
  } catch (error) {
    console.log("GET error single movie", error);
  }
}

// get all movie genres
function* fetchMovieGenres(action) {
  try {
    // console.log("fetchMovieGenres action.payload:", action.payload);
    // const response = yield axios.get(`/api/genre/${action.payload}`);
    const movieId = action.payload;
    const response = yield axios.get(`/api/genre/${movieId}`);
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    console.log("Error", error);
  }
}

// GET axios call to OMDb API to search for movie
function* fetchResultsFromOmdbapi(action) {
  try {
    let searchTerms = action.payload;
    let title = searchTerms.title;
    console.log("fetched api result =", searchTerms);

    const searchResult = yield axios.get(`/api/search/${title}`);
    yield put({ type: "SET_SEARCH", payload: searchResult.data });
  } catch (error) {
    console.log("error with api get request from client side", error);
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

// POST axios call to save movie to database
function* saveMovie(action) {
  try {
    yield axios.post("api/movie", action.payload);
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.log("POST save movie client error", error);
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// store results from OMDB API search to state
const SearchOmdbApi = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};

// store movie item
const movieItem = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE":
    //   console.log("SET_MOVIE action.payload: ", action.payload);
      if (action.payload.length > 0) {
        // console.log("SET_MOVIE action.payload[0]: ", action.payload[0]);
        return action.payload[0];
      }
      return undefined;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieItem,
    SearchOmdbApi,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
