import { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipes() {
  const [favoriteRecipes, setfavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')),
  );
  const [filter, setFilter] = useState('all');
  const [linkCopied, setLinkCopied] = useState(false);
  const timeOut = 1000;

  const handleRemoveFavorite = (favoriteToRemove) => {
    const updatedFavoritesRecipes = favoriteRecipes.filter(
      (favoriteRecipe) => favoriteRecipe.id !== favoriteToRemove,
    );
    setfavoriteRecipes(updatedFavoritesRecipes);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoritesRecipes));
  };

  return (
    <>
      <button
        data-testid="filter-by-meal-btn"
        onClick={ () => setFilter('meal') }
      >
        Meals
      </button>
      <button
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('all') }
      >
        All
      </button>
      {filter === 'meal'
        && favoriteRecipes
          .filter(({ type }) => type === 'meal')
          .map((favoriteRecipe, index) => (
            <div key={ favoriteRecipe.id }>
              <Link to={ `/meals/${favoriteRecipe.id}` }>
                <img
                  src={ favoriteRecipe.image }
                  alt={ favoriteRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{favoriteRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {favoriteRecipe.category}
                {' '}
                -
                {' '}
                {favoriteRecipe.nationality}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/meals/${favoriteRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              <button
                src={ blackHeartIcon }
                data-testid={ `${index}-horizontal-favorite-btn` }
                onClick={ () => handleRemoveFavorite(favoriteRecipe.id) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Favorite Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ))}
      {filter === 'drink'
        && favoriteRecipes
          .filter(({ type }) => type === 'drink')
          .map((favoriteRecipe, index) => (
            <div key={ favoriteRecipe.id }>
              <Link to={ `/drinks/${favoriteRecipe.id}` }>
                <img
                  src={ favoriteRecipe.image }
                  alt={ favoriteRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{favoriteRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {favoriteRecipe.alcoholicOrNot}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/drinks/${favoriteRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              <button
                src={ blackHeartIcon }
                data-testid={ `${index}-horizontal-favorite-btn` }
                onClick={ () => handleRemoveFavorite(favoriteRecipe.id) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Favorite Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ))}
      {filter === 'all'
        && favoriteRecipes
          .map((favoriteRecipe, index) => (favoriteRecipe.type === 'meal' ? (
            <div key={ favoriteRecipe.id }>
              <Link to={ `/meals/${favoriteRecipe.id}` }>
                <img
                  src={ favoriteRecipe.image }
                  alt={ favoriteRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{favoriteRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {favoriteRecipe.nationality}
                {' '}
                -
                {' '}
                {favoriteRecipe.category}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/meals/${favoriteRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              <button
                src={ blackHeartIcon }
                data-testid={ `${index}-horizontal-favorite-btn` }
                onClick={ () => handleRemoveFavorite(favoriteRecipe.id) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Favorite Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ) : (
            <div key={ favoriteRecipe.id }>
              <Link to={ `/drinks/${favoriteRecipe.id}` }>
                <img
                  src={ favoriteRecipe.image }
                  alt={ favoriteRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{favoriteRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {favoriteRecipe.alcoholicOrNot}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/drinks/${favoriteRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              <button
                src={ blackHeartIcon }
                data-testid={ `${index}-horizontal-favorite-btn` }
                onClick={ () => handleRemoveFavorite(favoriteRecipe.id) }
              >
                <img
                  src={ blackHeartIcon }
                  alt="Favorite Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          )))}
    </>
  );
}
