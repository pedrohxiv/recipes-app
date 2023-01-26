import { createContext, useMemo } from 'react';
import useMeals from '../hooks/useMeals';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const { getMeals,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealsDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails } = useMeals();

  const values = useMemo(() => ({ getMeals,
    getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealsDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails,
  }), [getMeals, getMealsByFirstLetter,
    getMealsByIngredient,
    getMealsCategory,
    getMealsByCategory,
    getMealsDetails,
    meals,
    mealsFirstLetter,
    mealsByIngredient,
    mealsByCategory,
    mealsCategory,
    mealsDetails]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
