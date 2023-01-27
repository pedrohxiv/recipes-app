import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

function Ingredients() {
  const { mealsDetails } = useContext(RecipeContext);
  return (
    <div>
      <p>Ingredients</p>
      <ul>
        {mealsDetails
          && console.log(mealsDetails
            .reduce((final, ingredient) => ([...final, ingredient.strIngredient])), [])
          }

        // mealsDetails[0].map((ingredient, index) => (
        //   <li data-tesstid={ `${index}-ingredient-name-and-measure` }>
        //     {ingredient.strIngredient[index]}
        //   </li>
        // ))
      </ul>
    </div>
  );
}

export default Ingredients;
//   "strIngredient2": "Onion",
//   "strIngredient3": "Carrots",
//   "strIngredient4": "Tomato Puree",
//   "strIngredient5": "Cumin",
//   "strIngredient6": "Paprika",
//   "strIngredient7": "Mint",
//   "strIngredient8": "Thyme",
//   "strIngredient9": "Black Pepper",
//   "strIngredient10": "Red Pepper Flakes",
//   "strIngredient11": "Vegetable Stock",
//   "strIngredient12": "Water",
//   "strIngredient13": "Sea Salt",
//   "strIngredient14": "",
//   "strIngredient15": "",
//   "strIngredient16": "",
//   "strIngredient17": "",
//   "strIngredient18": "",
//   "strIngredient19": "",
//   "strIngredient20": "",
//   "strMeasure1": "1 cup ",
//   "strMeasure2": "1 large",
//   "strMeasure3": "1 large",
//   "strMeasure4": "1 tbs",
//   "strMeasure5": "2 tsp",
//   "strMeasure6": "1 tsp ",
//   "strMeasure7": "1/2 tsp",
//   "strMeasure8": "1/2 tsp",
//   "strMeasure9": "1/4 tsp",
//   "strMeasure10": "1/4 tsp",
//   "strMeasure11": "4 cups ",
//   "strMeasure12": "1 cup ",
//   "strMeasure13": "Pinch",
