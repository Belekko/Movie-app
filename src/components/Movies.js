import React from 'react';
import Movie from './Movie';

const Movies = ({movies = []}) => {

  console.log(movies)
  return (
    <div className='movies'>
      {movies.length ? movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      )) : <h3>Nothing found</h3>}
    </div>
  );
};

export default Movies;
