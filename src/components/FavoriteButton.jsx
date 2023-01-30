import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

function FavoriteButton({ drink, meal }) {
  const { saveFavoriteRecipe, removeFavoriteRecipe,
    getLocalResponseFavorite, isFavorite } = useLocalStorage();
  const { id } = useParams();
  const favorite = () => {
    const existFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (existFavorite.find((recipeId) => recipeId.id === `${id}`) === undefined) {
      return saveFavoriteRecipe(drink, meal);
    }
    removeFavoriteRecipe(id);
  };

  useEffect(() => {
    getLocalResponseFavorite(id);
  }, []);

  return (
    <input
      type="image"
      src={ isFavorite ? blackHeart : whiteHeart }
      data-testid="favorite-btn"
      alt="favorite Recipe"
      onClick={ favorite }
      style={ {
        aspectRatio: '1/1',
        width: '20px',
      } }
    />

  );
}

FavoriteButton.propTypes = {}.isRequired;

export default FavoriteButton;
