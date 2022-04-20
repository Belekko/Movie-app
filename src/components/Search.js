import React, { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('shrek');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };
  return (
    <div className='row'>
      <div className='input-field'>
        <input
          placeholder='Search'
          type='search'
          className='validate'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className='btn search-btn #29b6f6 light-blue lighten-1' onClick={() => searchMovies(search, type)}>
          Search Movies
        </button>
      </div>
      <div>
        <label>
          <input
            type='radio'
            className='width-gap'
            name='type'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            type='radio'
            name='type'
            className='width-gap'
            data-type='movie'
            checked={type === 'movie'}
            onChange={handleFilter}
          />{' '}
          <span>Movies only</span>
        </label>
        <label>
          <input
            type='radio'
            name='type'
            className='width-gap'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
