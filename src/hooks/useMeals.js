import { useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const useMeals = () => {
  const {
    setMeals,
    setMealsCategory,
    setMealsDetails,
    meals,
    mealsCategory,
    mealsDetails,
  } = useContext(RecipeContext) || {};

  const getMealsByName = async (name = '') => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    getMealsByName();
  }, []);

  const getMealsByFirstLetter = async (letter) => {
    if (letter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const getMealsByIngredient = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const getMealsByCategory = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const getMealsCategory = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    setMealsCategory(data.meals);
  };

  const getMealsDetails = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setMealsDetails(data.meals);
  };

  return { getMealsByName,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealsDetails,
    meals,
    mealsCategory,
    mealsDetails,
  };
};

export default useMeals;
