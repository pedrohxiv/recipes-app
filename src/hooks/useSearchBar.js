import { useState } from 'react';

function useSearchBar() {
  const [filter, setFilter] = useState({
    search: '',
    radioFilter: '',
  });
  const handleChange = ({ target: { value, name } }) => {
    setFilter((oldFilter) => ({ ...oldFilter, [name]: value }));
  };
  const handleClickFilters = () => {};
  return {
    filter,
    handleChange,
    handleClickFilters,
  };
}

export default useSearchBar;
