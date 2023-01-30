import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

function Recommendation() {
  const { getDrinks, drinks, getMeals, meals } = useContext(RecipeContext);
  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (!meals || !drinks) {
      getDrinks();
      getMeals();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meals, drinks]);

  return (
    <div>
      <h3>Recommended</h3>
      {((pathname === `/drinks/${id}`) && meals)
      && meals.slice(0, Number('6')).map((meal, index) => (
        <div
          data-testid={ `${index}-recommendation-card` }
          key={ meal.idMeal }
          style={ { visibility: `${index > 1 ? 'hidden' : 'visible'}` } }
        >
          <Link to={ `/meals/${meal.idMeal}` }>
            <img
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
              height="50px"
            />
            <span data-testid={ `${index}-recommendation-title` }>
              { meal.strMeal }
            </span>
          </Link>
        </div>
      ))}

      {((pathname === `/meals/${id}`) && drinks)
      && drinks.slice(0, Number('6')).map((drink, index) => (
        <div
          data-testid={ `${index}-recommendation-card` }
          key={ drink.idDrink }
          style={ { visibility: `${index > 1 ? 'hidden' : 'visible'}` } }
        >
          <Link to={ `/drinks/${drink.idDrink}` }>
            <img
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              height="50px"
            />
            <span data-testid={ `${index}-recommendation-title` }>
              { drink.strDrink }
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recommendation;
