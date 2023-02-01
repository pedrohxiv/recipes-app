import useSearchBar from '../hooks/useSearchBar';

function Search() {
  const { handleClick, filter, handleChange } = useSearchBar();
  return (
    <div>
      <div>
        <form>
          <input
            data-testid="search-input"
            type="text"
            name="search"
            onChange={ handleChange }
            value={ filter.search }
          />
          <label htmlFor="ingredient-search-radio">
            Ingredient
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredient-search-radio"
              name="radioFilter"
              value="ingredient"
              checked={ filter.radioFilter === 'ingredient' }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="name-search-radio">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              id="name-search-radio"
              name="radioFilter"
              value="name"
              checked={ filter.radioFilter === 'name' }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="first-letter-search-radio">
            First letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              id="first-letter-search-radio"
              name="radioFilter"
              value="first letter"
              checked={ filter.radioFilter === 'first letter' }
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ handleClick }
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
