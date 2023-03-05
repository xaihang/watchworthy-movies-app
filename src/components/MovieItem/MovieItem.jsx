import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MovieItem({ movie }) {
    const history = useHistory();

    const setMovie = (movie) => {
        // console.log('setMovie', movie.id);
        history.push(`details/${movie.id}`)
    }
 
    return (
        <div>
            <h4>{movie.title}</h4>
            <img
                onClick={() => setMovie (movie)}
                src={movie.poster}
                alt={movie.title} 
             />
        </div>
    )
}
