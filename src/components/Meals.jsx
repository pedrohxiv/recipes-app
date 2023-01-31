import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import CardRecipe from './CardRecipe';
import CategoryFilter from './CategoryFilter';
import Footer from './Footer';
import Header from './Header';

function Meals() {
  const { getMeals, meals } = useContext(RecipeContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!meals && pathname === '/meals') { getMeals(); }
  }, [meals, getMeals, pathname]);

  if (pathname !== '/meals') return;

  return (
    <div>
      <Header title="Meals" />
      <CategoryFilter />
      {meals && meals.slice(0, Number('12')).map((meal, index) => (
        <CardRecipe
          key={ meal.idMeal }
          image={ meal.strMealThumb }
          title={ meal.strMeal }
          index={ index }
          id={ meal.idMeal }
          isMeal
        />
      ))}
      <Footer />
    </div>
  );
}

export default Meals;
