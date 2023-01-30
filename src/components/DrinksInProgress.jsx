import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import FavoriteButton from './FavoriteButton';
import IngredientsInProgress from './IngredientsInProgress';
import Instructions from './Instructions';
import ShareButton from './ShareButton';

function DrinksInProgress() {
  const { getDrinksDetails, drinksDetails } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    if (!drinksDetails) { getDrinksDetails(id); }
  }, [drinksDetails]);

  return (
    <div>
      {drinksDetails && drinksDetails.map((drink) => (
        <div key={ drink.idDrink }>
          <FavoriteButton drink={ drink } />
          <ShareButton />
          <img
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
            data-testid="recipe-photo"
            height="200px"
          />
          <h4 data-testid="recipe-title">{drink.strDrink}</h4>
          <h6 data-testid="recipe-category">{drink.strCategory}</h6>
          <IngredientsInProgress recipe={ drinksDetails } />
          <Instructions howTo={ drink.strInstructions } />
          <button data-testid="finish-recipe-btn">Finish Recipe</button>
        </div>
      ))}
    </div>
  );
}

export default DrinksInProgress;
