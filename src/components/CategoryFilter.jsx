import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

function CategoryFilter() {
  const { drinksCategory, getDrinksCategory, mealsCategory, getMealsCategory,
    getDrinksByCategory, getMealsByCategory,
    getMealsByName, getDrinks } = useContext(RecipeContext);
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState('');

  const handleToggle = ({ target: { value } }) => {
    setToggle(value);
    console.log(value);
    if (toggle === value) {
      setToggle('');
      return pathname === '/meals'
        ? getMealsByName() : getDrinks();
    }
    return pathname === '/meals'
      ? getMealsByCategory(value) : getDrinksByCategory(value);
  };

  useEffect(() => {
    if ((!mealsCategory && pathname === '/meals')) { getMealsCategory(); }
    if ((!drinksCategory && pathname === '/drinks')) { getDrinksCategory(); }
  }, [drinksCategory, mealsCategory]);

  return (
    <div>
      <button
        type="submit"
        data-testid="All-category-filter"
        onClick={ () => (
          pathname === '/meals' ? getMealsByName() : getDrinks()) }
      >
        All
      </button>
      {(pathname === '/meals' && mealsCategory) && (
        mealsCategory.slice(0, Number('5')).map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="submit"
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ handleToggle }
          >
            {strCategory}
          </button>
        )))}
      {(pathname === '/drinks' && drinksCategory) && (
        drinksCategory.slice(0, Number('5')).map(({ strCategory }) => (
          <button
            key={ strCategory }
            type="submit"
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleToggle }
            value={ strCategory }
          >
            {strCategory}
          </button>
        )))}
    </div>
  );
}

export default CategoryFilter;
