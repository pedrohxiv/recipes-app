import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import { RecipeContext } from '../context/RecipeContext';
import CardRecipe from './CardRecipe';
import Header from './Header';
import CategoryFilter from './CategoryFilter';

function Drinks() {
  const { getDrinks, drinks } = useContext(RecipeContext);
  const location = useLocation();

  useEffect(() => {
    if (!drinks && location.pathname === '/drinks') { getDrinks(); }
  }, [drinks, getDrinks, location]);

  if (location.pathname !== '/drinks') return;

  return (
    <div>
      <Header title="Drinks" />
      <CategoryFilter />
      {drinks && drinks.slice(0, Number('12')).map((drink, index) => (
        <CardRecipe
          key={ drink.idDrink }
          image={ drink.strDrinkThumb }
          title={ drink.strDrink }
          index={ index }
          id={ drink.idDrink }
          isMeal={ false }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;
