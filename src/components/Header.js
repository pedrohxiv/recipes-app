import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from './SearchBar';

function Header({ title = 'Meals' }) {
  const history = useHistory();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = history.location;
  const pagesWithoutSearch = ['/profile', '/done-recipes', '/favorite-recipes'];
  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>
      <button
        onClick={ () => history.push('/profile') }
        data-testid="btn-profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Profile icon"
        />
      </button>
      {!pagesWithoutSearch.includes(pathname)
        && (
          <button
            onClick={ () => setIsSearchOpen(!isSearchOpen) }
            data-testid="btn-show-search"
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search icon"
            />
          </button>
        )}
      {isSearchOpen && <Search />}
    </div>
  );
}

Header.propTypes = {}.isRequired;

export default Header;
