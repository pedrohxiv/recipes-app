import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const useDrinks = () => {
  const {
    setDrinks,
    setDrinksFirstLetter,
    setDrinksByIngredient,
    setDrinksCategory,
    setDrinksDetails,
    drinks,
    drinksFirstLetter,
    drinksByIngredient,
    drinksCategory,
    drinksDetails,
  } = useContext(RecipeContext) || {};

  const getDrinks = async (name = '') => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    setDrinks(data.drinks);
  };

  const getDrinksByFirstLetter = async (letter) => {
    if (letter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    setDrinksFirstLetter(data.drinks);
  };

  const getDrinksByIngredient = async (ingredient) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setDrinksByIngredient(data.drinks);
  };

  const getDrinksByCategory = async (category) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    setDrinks(data.drinks);
  };

  const getDrinksCategory = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    setDrinksCategory(data.drinks);
  };

  const getDrinksDetails = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setDrinksDetails(data.drinks);
  };

  return { getDrinks,
    getDrinksByFirstLetter,
    getDrinksByCategory,
    getDrinksDetails,
    getDrinksByIngredient,
    getDrinksCategory,
    drinks,
    drinksFirstLetter,
    drinksByIngredient,
    drinksCategory,
    drinksDetails,
  };
};

export default useDrinks;
