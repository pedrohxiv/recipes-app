// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
// import { RecipeContext } from '../context/RecipeContext';

function Recipes() {
  // const values = useContext(RecipeContext);
  const history = useHistory();
  const pagePath = history.location.pathname;
  return (
    <div>
      <Header title={ pagePath === '/drinks' ? 'Drinks' : 'Meals' } />
    </div>
  );
}

export default Recipes;
