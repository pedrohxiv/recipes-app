import { createContext, useMemo } from 'react';
import useDrinks from '../hooks/useDrinks';
import useMeals from '../hooks/useMeals';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const { getMeals, getMealsByFirstLetter, getMealsByIngredient, getMealsCategory,
    getMealsByCategory, getMealsDetails, meals, mealsFirstLetter, mealsByIngredient,
    mealsCategory, mealsDetails } = useMeals();

  const { getDrinks, getDrinksByFirstLetter, getDrinksByCategory, getDrinksDetails,
    getDrinksByIngredient, getDrinksCategory, drinks, drinksFirstLetter,
    drinksByIngredient, drinksCategory, drinksDetails } = useDrinks();

  const values = useMemo(() => ({ getMeals,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealsDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsCategory,
    mealsDetails,
    getDrinks,
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
  }), [getMeals, getMealsByFirstLetter, getMealsByIngredient, getMealsCategory,
    getMealsByCategory, getMealsDetails, meals, mealsFirstLetter,
    mealsByIngredient, mealsCategory, mealsDetails, getDrinks,
    getDrinksByFirstLetter, getDrinksByCategory, getDrinksDetails, getDrinksByIngredient,
    getDrinksCategory, drinks, drinksFirstLetter, drinksByIngredient,
    drinksCategory, drinksDetails]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
