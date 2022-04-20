import React from 'react';

const Header = () => {
  return (
    <nav >
      <div className='nav-wrapper header__nav #1e88e5 blue darken-1'>
        <span className='brand-logo'  >
          React
        </span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            Movies
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
