import { createContext, useMemo } from 'react';
import useDrinks from '../hooks/useDrinks';
import useMeals from '../hooks/useMeals';
import useSearchBar from '../hooks/useSearchBar';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const { getMealsByName, getMealsByFirstLetter, getMealsByIngredient, getMealsCategory,
    getMealsByCategory, getMealsDetails, meals, mealsFirstLetter, mealsByIngredient,
    mealsCategory, mealsDetails } = useMeals();

  const { getDrinks, getDrinksByFirstLetter, getDrinksByCategory, getDrinksDetails,
    getDrinksByIngredient, getDrinksCategory, drinks, drinksFirstLetter,
    drinksByIngredient, drinksCategory, drinksDetails } = useDrinks();

  const { filter, handleChange, handleClickFilters } = useSearchBar();

  const values = useMemo(() => ({
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
    filter,
    handleChange,
    handleClickFilters,
    getMealsByName,
  }), [getMealsByFirstLetter, getMealsByIngredient, getMealsCategory,
    getMealsByCategory, getMealsDetails, meals, mealsFirstLetter,
    mealsByIngredient, mealsCategory, mealsDetails, getDrinks,
    getDrinksByFirstLetter, getDrinksByCategory, getDrinksDetails, getDrinksByIngredient,
    getDrinksCategory, drinks, drinksFirstLetter, drinksByIngredient,
    drinksCategory, drinksDetails,
    filter,
    handleChange,
    handleClickFilters, getMealsByName]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
