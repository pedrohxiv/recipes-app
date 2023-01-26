import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from './Search';

function Header(props) {
  const history = useHistory();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pagePath = history.location.pathname;
  // const pagesWithoutSearch = ['/profile', '/done-recipes', '/favorite-recipes'];
  const { title } = props;
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
      {(pagePath !== '/profile'
      && pagePath !== '/done-recipes' && pagePath !== '/favorite-recipes') && (
        <button
          onClick={ () => setIsSearchOpen(!isSearchOpen) }
          data-testid="btn-show-search"
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Profile icon"
          />
        </button>
      )}
      {isSearchOpen && <Search />}
    </div>
  );
}

Header.propTypes = {}.isRequired;

export default Header;
