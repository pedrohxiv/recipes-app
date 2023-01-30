import { useEffect, useState } from 'react';
import useDrinks from './useDrinks';
import useMeals from './useMeals';

function useSearchBar() {
  const [filter, setFilter] = useState({
    search: '',
    radioFilter: '',
  });
  const {
    getMealsByIngredient,
    getMealsByName,
    getMealsByFirstLetter } = useMeals();

  const {
    getDrinksByIngredient,
    getDrinksByName,
    getDrinksByFirstLetter,
  } = useDrinks();

  const handleChange = ({ target: { value, name } }) => {
    setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
  };

  const handleClickMeals = () => {
    switch (filter.radioFilter) {
    case 'ingredient':
      return getMealsByIngredient(filter.search);
    case 'name':
      return getMealsByName(filter.search);
    case 'first letter':
      return getMealsByFirstLetter(filter.search);
    default:
      return undefined;
    }
  };

  const handleClickDrinks = () => {
    switch (filter.radioFilter) {
    case 'ingredient':
      return getDrinksByIngredient(filter.search);
    case 'name':
      return getDrinksByName(filter.search);
    case 'first letter':
      return getDrinksByFirstLetter(filter.search);
    default:
      return undefined;
    }
  };

  useEffect(() => {
    handleClickMeals();
  }, [filter]);

  return {
    filter,
    handleChange,
    handleClickMeals,
    handleClickDrinks,
  };
}

export default useSearchBar;
