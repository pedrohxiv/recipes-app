import { createContext, useMemo, useState } from 'react';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [meals, setMeals] = useState(null);
  const [mealsCategory, setMealsCategory] = useState(null);
  const [mealsDetails, setMealsDetails] = useState(null);

  const [drinks, setDrinks] = useState(null);
  const [drinksFirstLetter, setDrinksFirstLetter] = useState(null);
  const [drinksByIngredient, setDrinksByIngredient] = useState(null);
  const [drinksCategory, setDrinksCategory] = useState(null);
  const [drinksDetails, setDrinksDetails] = useState(null);

  const [filter, setFilter] = useState({
    search: '',
    radioFilter: '',
  });

  const values = useMemo(() => ({
    meals,
    mealsCategory,
    mealsDetails,
    setMeals,
    setMealsCategory,
    setMealsDetails,
    drinks,
    drinksFirstLetter,
    drinksByIngredient,
    drinksCategory,
    drinksDetails,
    setDrinks,
    setDrinksFirstLetter,
    setDrinksByIngredient,
    setDrinksCategory,
    setDrinksDetails,
    filter,
    setFilter,
  }), [
    meals,
    mealsCategory,
    mealsDetails,
    setMeals,
    setMealsCategory,
    setMealsDetails,
    drinks,
    drinksFirstLetter,
    drinksByIngredient,
    drinksCategory,
    drinksDetails,
    setDrinks,
    setDrinksFirstLetter,
    setDrinksByIngredient,
    setDrinksCategory,
    setDrinksDetails,
    filter,
    setFilter,
  ]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
