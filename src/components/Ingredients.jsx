import React, { useEffect } from 'react';
import useIngredients from '../hooks/useIngredients';

function Ingredients({ recipe }) {
  const { list, createIngredients } = useIngredients();

  useEffect(() => {
    if (recipe) {
      createIngredients(recipe);
    }
  }, []);

  return (
    <div>
      <p>Ingredients</p>
      {(recipe && list) && list.map(([ingredient, measure], index) => (
        <span
          type="checkbox"
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ `${index} ${ingredient}` }
        >
          {`${ingredient} ${measure}`}
        </span>

      ))}
    </div>
  );
}
Ingredients.propTypes = {}.isRequired;
export default Ingredients;
