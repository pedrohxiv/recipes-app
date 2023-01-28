import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Recommendation from './Recommendation';

function DrinkDetail() {
  const { drinksDetails, getDrinksDetails } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    if (!drinksDetails) { getDrinksDetails(id); }
  }, [drinksDetails, getDrinksDetails, id]);
  return (
    <div>
      {drinksDetails && drinksDetails.map((drink) => (
        <div key={ drink.idDrink }>
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid="recipe-photo"
            height="200px"
          />
          <h4 data-testid="recipe-title">{drink.strDrink}</h4>
          <h6 data-testid="recipe-category">{drink.strAlcoholic}</h6>
          <Instructions howTo={ drink.strInstructions } />
          <Ingredients recipe={ drinksDetails } />
          <Recommendation />
        </div>
      ))}
    </div>
  );
}

export default DrinkDetail;
