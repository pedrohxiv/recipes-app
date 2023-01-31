import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardRecipe from '../components/CardRecipe';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useDrinks from '../hooks/useDrinks';

function Drinks() {
  const { getDrinks, drinks } = useDrinks();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!drinks && pathname === '/drinks') { getDrinks(); }
  }, [drinks, getDrinks, pathname]);

  if (pathname !== '/drinks') return;

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
