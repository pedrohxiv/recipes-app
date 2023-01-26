import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

function MealDetail() {
  const { mealsDetails, getMealsDetails } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    if (!mealsDetails) { getMealsDetails(id); }
  }, [mealsDetails, getMealsDetails, id]);
  return (
    <div>
      Oi
      {mealsDetails && (
        <div>
          <Instructions howTo={ mealsDetails[0].strInstructions } />
          <Ingredients />
        </div>
      )}
    </div>
  );
}

export default MealDetail;
