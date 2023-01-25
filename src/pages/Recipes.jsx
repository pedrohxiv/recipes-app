import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

function Recipes() {
  const values = useContext(RecipeContext);
  return (
    <div>{values}</div>
  );
}

export default Recipes;
