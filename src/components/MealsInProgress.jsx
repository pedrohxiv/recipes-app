import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../hooks/useMeals';
import FavoriteButton from './FavoriteButton';
import IngredientsInProgress from './IngredientsInProgress';
import Instructions from './Instructions';
import ShareButton from './ShareButton';

function MealsInProgress() {
  const { getMealsDetails, mealsDetails } = useMeals();
  const { id } = useParams();

  useEffect(() => {
    if (!mealsDetails) { getMealsDetails(id); }
  }, [mealsDetails]);

  return (
    <div>
      {mealsDetails && mealsDetails.map((meal) => (
        <div key={ meal.idMeal }>
          <FavoriteButton meal={ meal } />
          <ShareButton />
          <img
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
            data-testid="recipe-photo"
            height="200px"
          />
          <h4 data-testid="recipe-title">{meal.strMeal}</h4>
          <h6 data-testid="recipe-category">{meal.strCategory}</h6>
          <IngredientsInProgress recipe={ mealsDetails } />
          <Instructions howTo={ meal.strInstructions } />
          <button data-testid="finish-recipe-btn">Finish Recipe</button>
        </div>
      ))}
    </div>
  );
}

export default MealsInProgress;
