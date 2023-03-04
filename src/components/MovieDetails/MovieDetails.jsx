import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  
  const movieDetail = useSelector(store => store.movies.find(movie => movie.id === Number(id)));
  const genres = useSelector(store => store.genres);
  console.log('movieDetail =======', movieDetail);

  // dispatch({ type: 'FETCH_MOVIE_GENRES', payload: id});
  // useEffect(() => {
  //   dispatch(fetchMovieGenres(id));
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIE_GENRES', payload: id });
  }, [dispatch, id]);


  return (
    <div>
      <div>
        <h4>MOVIE DETAILS</h4>
        <img src={movieDetail.poster} alt={movieDetail.title} />
        <div>
          <h2>{movieDetail.title}</h2>
          <ul>
            {genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h5>{movieDetail.description}</h5>
        </div>
        <div>
          <button onClick={() => history.push('/')}>Back to List</button>
        </div>
      </div>
    </div>
  );
}
