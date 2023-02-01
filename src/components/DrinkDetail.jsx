import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useDrinks from '../hooks/useDrinks';
import ButtonStart from './ButtonStart';
import FavoriteButton from './FavoriteButton';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Recommendation from './Recommendation';
import ShareButton from './ShareButton';

function DrinkDetail() {
  const { drinksDetails, getDrinksDetails } = useDrinks();
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!drinksDetails) { getDrinksDetails(id); }
  }, [drinksDetails, getDrinksDetails, id]);

  if (pathname !== `/drinks/${id}`) return;
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
          <h6 data-testid="recipe-category">{drink.strAlcoholic}</h6>
          <Instructions howTo={ drink.strInstructions } />
          <Ingredients recipe={ drinksDetails } />
          <Recommendation />
          <ButtonStart />
        </div>
      ))}
    </div>
  );
}

export default DrinkDetail;
