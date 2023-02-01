import { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';

export default function DoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const [filter, setFilter] = useState('all');
  const [linkCopied, setLinkCopied] = useState(false);
  const timeOut = 1000;
  console.log(doneRecipes);
  return (
    <>
      <Header title="Done Recipes" />
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
        && doneRecipes
          .filter(({ type }) => type === 'meal')
          .map((doneRecipe, index) => (
            <div key={ doneRecipe.id }>
              <Link to={ `/meals/${doneRecipe.id}` }>
                <img
                  src={ doneRecipe.image }
                  alt={ doneRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {doneRecipe.category}
                {' '}
                -
                {' '}
                {doneRecipe.nationality}
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneRecipe.doneDate}
              </p>
              {doneRecipe.tags.slice(0, 2).map((tagName) => (
                <p key={ tagName } data-testid={ `${index}-${tagName}-horizontal-tag` }>
                  {tagName}
                </p>
              ))}
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/meals/${doneRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ))}
      {filter === 'drink'
        && doneRecipes
          .filter(({ type }) => type === 'drink')
          .map((doneRecipe, index) => (
            <div key={ doneRecipe.id }>
              <Link to={ `/drinks/${doneRecipe.id}` }>
                <img
                  src={ doneRecipe.image }
                  alt={ doneRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {doneRecipe.alcoholicOrNot}
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneRecipe.doneDate}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/drinks/${doneRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ))}
      {filter === 'all'
        && doneRecipes
          .map((doneRecipe, index) => (doneRecipe.type === 'meal' ? (
            <div key={ doneRecipe.id }>
              <Link to={ `/meals/${doneRecipe.id}` }>
                <img
                  src={ doneRecipe.image }
                  alt={ doneRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {doneRecipe.nationality}
                {' '}
                -
                {' '}
                {doneRecipe.category}
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneRecipe.doneDate}
              </p>
              {doneRecipe.tags.slice(0, 2).map((tagName) => (
                <p key={ tagName } data-testid={ `${index}-${tagName}-horizontal-tag` }>
                  {tagName}
                </p>
              ))}
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/meals/${doneRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          ) : (
            <div key={ doneRecipe.id }>
              <Link to={ `/drinks/${doneRecipe.id}` }>
                <img
                  src={ doneRecipe.image }
                  alt={ doneRecipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  width="100px"
                  height="100px"
                />
                <p data-testid={ `${index}-horizontal-name` }>{doneRecipe.name}</p>
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {doneRecipe.alcoholicOrNot}
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                {doneRecipe.doneDate}
              </p>
              <button
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ () => {
                  copy(`http://localhost:3000/drinks/${doneRecipe.id}`);
                  setLinkCopied(true);
                  setTimeout(() => setLinkCopied(false), timeOut);
                } }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </button>
              {linkCopied && <p>Link copied!</p>}
            </div>
          )))}
    </>
  );
}
