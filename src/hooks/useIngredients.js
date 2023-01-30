import { useState } from 'react';

const useIngredients = () => {
  const [list, setList] = useState();
  const [checkedItems, setCheckedItems] = useState();

  const createIngredients = (recipe) => {
    // iteration for search compatibles ingredients and measures
    const searchInMeal = (str) => Object.entries(recipe[0])
      .filter((key) => key[0].includes(str)).filter((value) => value[1])
      .map((final) => final[1]);

    // iteration to join every ingredient with own measure
    const final = searchInMeal('strIng')
      .reduce((finalRecipe, instruction, index) => ([...finalRecipe,
        [instruction,
          searchInMeal('strMeas')[index] === undefined
            ? '' : searchInMeal('strMeas')[index],
        ],
      ]), []);
    const checkVersion = final.reduce((checks, [ingredient, measure]) => ({
      ...checks, [`${ingredient} ${measure}`]: false }), {});
    setCheckedItems(checkVersion);
    return setList(final);
  };

  return { list, createIngredients, checkedItems, setCheckedItems };
};

export default useIngredients;
