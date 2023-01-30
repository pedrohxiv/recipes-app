import { useState } from 'react';

const useMeals = () => {
  const [meals, setMeals] = useState(null);
  const [mealsCategory, setMealsCategory] = useState(null);
  const [mealsByCategory, setMealsByCategory] = useState(null);
  const [mealsDetails, setMealsDetails] = useState(null);

  const getMealsByName = async (name = '') => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const getMealsByFirstLetter = async (letter) => {
    if (letter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    setMeals(data);
  };

  const getMealsByIngredient = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    setMeals(data);
  };

  const getMealsByCategory = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    setMealsByCategory(data);
  };

  const getMealsCategory = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();
    setMealsCategory(data);
  };

  const getMealDetails = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    setMealsDetails(data);
  };

  return { getMealsByName,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealDetails,
    meals,
    mealsByCategory,
    mealsCategory,
    mealsDetails,
  };
};

export default useMeals;
