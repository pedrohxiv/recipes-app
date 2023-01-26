import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const history = useHistory();
  const pagePath = history.location.pathname;
  const { title } = props;
  return (
    <div>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Profile icon"
      />
      {/* </button> */}
      {(pagePath !== '/profile'
      && pagePath !== '/done-recipes' && pagePath !== '/favorite-recipes') && (
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Profile icon"
        />

      )}
      <h1 data-testid="page-title">{title}</h1>
    </div>
  );
}

Header.propTypes = {}.isRequired;

export default Header;
