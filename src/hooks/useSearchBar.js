import { useState } from 'react';
import useDrinks from './useDrinks';
import useMeals from './useMeals';
// import { useLocation } from 'react-router-dom';

function useSearchBar() {
  const [filter, setFilter] = useState({
    search: '',
    radioFilter: '',
  });
  const { pathname } = useLocation();
  const {
    getMealsByIngredient,
    getMealsByName,
    getMealsByFirstLetter } = useMeals();

  const {} = useDrinks();

  const handleChange = ({ target: { value, name } }) => {
    setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
  };

  const handleClickFilters = () => {
    if (pathname === '/meals') {
      if (filter.radioFilter === 'ingredient') {
        getMealsByIngredient(filter.search);
      }
      if (filter.radioFilter === 'name') {
        getMealsByName(filter.search);
      }
      if (filter.radioFilter === 'first letter') {
        getMealsByFirstLetter(filter.search);
      }
    } else {
      if (filter.radioFilter === 'ingredient') {
        getMealsByIngredient(filter.search);
      }
      if (filter.radioFilter === 'name') {
        getMealsByName(filter.search);
      }
      if (filter.radioFilter === 'first letter') {
        getMealsByFirstLetter(filter.search);
      }
    }
  };


  return {
    filter,
    handleChange,
    handleClickFilters,
  };
}

export default useSearchBar;
