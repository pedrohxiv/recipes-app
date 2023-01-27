import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

function DrinkDetail() {
  const { drinksDetails, getDrinksDetails } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    if (!drinksDetails) { getDrinksDetails(id); }
  }, [drinksDetails, getDrinksDetails, id]);
  return (
    <div>
      Oi
      {drinksDetails && (
        <div>
          <Instructions howTo={ drinksDetails[0].strInstructions } />
          <Ingredients />
        </div>
      )}
    </div>
  );
}

export default DrinkDetail;
