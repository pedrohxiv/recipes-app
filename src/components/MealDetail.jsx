import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import ButtonStart from './ButtonStart';
import FavoriteButton from './FavoriteButton';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Recommendation from './Recommendation';
import ShareButton from './ShareButton';

function MealDetail() {
  const { mealsDetails, getMealsDetails } = useContext(RecipeContext);
  const { id } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!mealsDetails) { getMealsDetails(id); }
  }, [mealsDetails, getMealsDetails, id]);
  if (pathname !== `/meals/${id}`) return;
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
          <Instructions howTo={ meal.strInstructions } />
          <Ingredients recipe={ mealsDetails } />
          <iframe
            data-testid="video"
            title="YouTube video recipe"
            width="200px"
            height="150px"
            allowFullScreen
            src={ `https://www.youtube.com/embed/${meal.strYoutube.match(/(?<==).*/)}` }
          />
          <Recommendation />
          <ButtonStart />
        </div>
      ))}
    </div>
  );
}

export default MealDetail;
