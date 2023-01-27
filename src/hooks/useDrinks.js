const useDrinks = () => {
  const getDrinks = async (name = '') => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    return response.json();
  };

  const getDrinksByFirstLetter = async (letter) => {
    if (letter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    return response.json();
  };

  const getDrinksByIngredient = async (ingredient) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    return response.json();
  };

  const getDrinksByCategory = async (category) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data;
  };

  const getDrinksCategory = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    return response.json();
  };

  const getDrinkDetails = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return response.json();
  };

  return { getDrinks,
    getDrinksByFirstLetter,
    getDrinksByCategory,
    getDrinkDetails,
    getDrinksByIngredient,
    getDrinksCategory };
};

export default useDrinks;
