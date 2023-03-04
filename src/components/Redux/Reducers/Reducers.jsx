//! REDUCERS 

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
