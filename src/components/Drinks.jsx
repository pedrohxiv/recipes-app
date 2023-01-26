import React, { useContext } from 'react';
import Footer from './Footer';
import { RecipeContext } from '../context/RecipeContext';

function Drinks() {
  const values = useContext(RecipeContext);
  return (
    <div>
      {values}
      <Footer />
    </div>
  );
}

export default Drinks;
