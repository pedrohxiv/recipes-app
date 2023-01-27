import { createContext, useMemo } from 'react';
import useMeals from '../hooks/useMeals';
import useSearchBar from '../hooks/useSearchBar';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const { getMeals,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails } = useMeals();

  const { filter, handleChange, handleClickFilters } = useSearchBar();

  const values = useMemo(() => ({ getMeals,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails,
    filter,
    handleChange,
    handleClickFilters,
  }), [getMeals, getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails,
    filter,
    handleChange,
    handleClickFilters]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
