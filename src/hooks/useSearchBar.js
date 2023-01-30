import { useState } from 'react';
// import useDrinks from './useDrinks';
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

  // const {} = useDrinks();

  const handleChange = ({ target: { value, name } }) => {
    setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
  };

  const handleClickFilters = () => {
    switch (pathname === '/meals') {
    case filter.radioFilter === 'ingredient':
      return getMealsByIngredient(filter.search);
    case filter.radioFilter === 'name':
      return getMealsByName(filter.search);
    case filter.radioFilter === 'first letter':
      return getMealsByFirstLetter(filter.search);
    default:
      return undefined;
    }
  };

  return {
    filter,
    handleChange,
    handleClickFilters,
  };
}

export default useSearchBar;
