import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import useDrinks from './useDrinks';
import useMeals from './useMeals';

function useSearchBar() {
  const { filter, setFilter } = useContext(RecipeContext) || {};
  const { pathname } = useLocation();

  const {
    getMealsByIngredient,
    getMealsByName,
    getMealsByFirstLetter } = useMeals();

  const {
    getDrinksByIngredient,
    getDrinks,
    getDrinksByFirstLetter,
  } = useDrinks();

  const handleChange = ({ target: { value, name } }) => {
    setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
  };

  const handleClick = () => {
    const isMeals = pathname.includes('meals');
    const cases = {
      ingredient: isMeals ? getMealsByIngredient : getDrinksByIngredient,
      name: isMeals ? getMealsByName : getDrinks,
      'first letter': isMeals ? getMealsByFirstLetter : getDrinksByFirstLetter,
    };

    return cases[filter.radioFilter](filter.search);
  };

  return {
    filter,
    handleChange,
    handleClick,
  };
}

export default useSearchBar;
