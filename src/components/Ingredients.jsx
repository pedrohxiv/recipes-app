import React, { useEffect, useState } from 'react';

function Ingredients({ recipe }) {
  const [list, setList] = useState();
  // iteration for search compatibles ingredients and measures
  const searchInMeal = (str) => Object.entries(recipe[0])
    .filter((key) => key[0].includes(str));
  //   reduce((final, [key, value]) => ((key.includes(str)
  // && value.trim().length !== 0)
  //     ? [...final, [key, value.trimEnd()]] : final), []);

  // iteration to join evey ingredient with own measure
  const final = searchInMeal('strIng')
    .reduce((finalRecipe, instruction, index) => ([...finalRecipe,
      [instruction[1], searchInMeal('strMeas')[index][1]]]), []);

  useEffect(() => {
    if (recipe) {
      console.log(final);
      setList(final);
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
