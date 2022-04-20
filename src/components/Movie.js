import React from 'react';

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div key={imdbID} className='card movie'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img  src={Poster} className='activator' alt='movie' />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {Title}
        </span>
        <p className='year'>
          {Year}
          <span className='right'>{Type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
