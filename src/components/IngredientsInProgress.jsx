import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useIngredients from '../hooks/useIngredients';
import useLocalStorage from '../hooks/useLocalStorage';

function IngredientsInProgress({ recipe }) {
  const { createIngredients, list, checkedItems, setCheckedItems } = useIngredients();
  const { inProgressMeals, inProgressDrinks, loadProgressMeals } = useLocalStorage();
  const { pathname } = useLocation();
  const { id } = useParams();

  const handleCheck = ({ target: { value, checked } }) => {
    const progress = { ...checkedItems, [value]: checked };
    setCheckedItems(progress);
    return pathname.includes('drinks') ? inProgressDrinks(id, progress)
      : inProgressMeals(id, progress);
  };

  useEffect(() => {
    if (!list && recipe) { createIngredients(recipe); }
    if (list && pathname.includes('meals')) {
      inProgressMeals(id, checkedItems);
      const loaded = loadProgressMeals(id);
      setCheckedItems(loaded);
    }
    if (list && pathname.includes('drinks')) {
      inProgressDrinks(id, checkedItems);
    }
  }, []);

  return (
    <div>
      <h3>Ingredients</h3>
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        {(recipe && list) && list.map(([ingredient, measure], index) => (
          <label
            data-testid={ `${index}-ingredient-step` }
            key={ `${index} ${ingredient}` }
            htmlFor={ `${index} ${ingredient}` }
            style={ { textDecoration: checkedItems[`${ingredient} ${measure}`]
              ? 'line-through solid rgb(0, 0, 0)' : 'none' } }
          >
            <input
              type="checkbox"
              id={ `${index} ${ingredient}` }
              value={ `${ingredient} ${measure}` }
              onChange={ handleCheck }
            />
            {`${ingredient} ${measure}`}
          </label>
        ))}
      </div>
    </div>
  );
}

IngredientsInProgress.propTypes = {}.isRequired;

export default IngredientsInProgress;
