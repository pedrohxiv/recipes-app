import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import { RecipeContext } from '../context/RecipeContext';

function Meals() {
  const { getMeals, meals } = useContext(RecipeContext);

  // const max12 = meals.filter((_, array) => array.length < Number('11'));

  useEffect(() => {
    if (!meals) { getMeals(); }
  }, [getMeals, meals]);

  return (
    <div>
      {/* {console.log(meals ? max12 : '')} */}
      <Footer />
    </div>
  );
}

export default Meals;
