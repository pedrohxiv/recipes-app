import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const mealAndDrinkList = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];
const mealList = [mealAndDrinkList[0]];
const drinkList = [mealAndDrinkList[1]];

const filterByMealBtnStr = 'filter-by-meal-btn';
const filterByDrinkBtnStr = 'filter-by-drink-btn';
const zeroHorizontalImageStr = '0-horizontal-image';
const zeroHorizontalNameStr = '0-horizontal-name';
const zeroHorizontalTopTextStr = '0-horizontal-top-text';
const zeroHorizontalShareBtnStr = '0-horizontal-share-btn';
const zeroHorizontalFavoriteBtnStr = '0-horizontal-favorite-btn';

describe('Renderize o componente "Favorite Recipes"', () => {
  localStorage.setItem('favoriteRecipes', JSON.stringify(mealAndDrinkList));

  it('Verifica se os elementos da tela de receitas favoritas estão presente na tela', () => {
    renderWithRouter(<FavoriteRecipes />);

    const filterByMealBtnEl = screen.getByTestId(filterByMealBtnStr);
    expect(filterByMealBtnEl).toBeInTheDocument();
    const filterByDrinkBtnEl = screen.getByTestId(filterByDrinkBtnStr);
    expect(filterByDrinkBtnEl).toBeInTheDocument();
    const filterByAllBtnEl = screen.getByTestId('filter-by-all-btn');
    expect(filterByAllBtnEl).toBeInTheDocument();
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    expect(firstHorizontalImageEl).toBeInTheDocument();
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    expect(firstHorizontalNameEl).toBeInTheDocument();
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    expect(firstHorizontalTopTextEl).toBeInTheDocument();
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    expect(firstHorizontalShareBtnEl).toBeInTheDocument();
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);
    expect(firstHorizontalFavoriteBtnEl).toBeInTheDocument();
    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    expect(secondHorizontalImageEl).toBeInTheDocument();
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    expect(secondHorizontalNameEl).toBeInTheDocument();
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    expect(secondHorizontalTopTextEl).toBeInTheDocument();
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');
    expect(secondHorizontalShareBtnEl).toBeInTheDocument();
    const secondHorizontalFavoriteBtnEl = screen.getByTestId('1-horizontal-favorite-btn');
    expect(secondHorizontalFavoriteBtnEl).toBeInTheDocument();
  });

  it('Verifica se o botão "Meals" realmente filtra os elementos', () => {
    renderWithRouter(<FavoriteRecipes />);

    const filterByMealBtnEl = screen.getByTestId(filterByMealBtnStr);
    userEvent.click(filterByMealBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);

    expect(firstHorizontalImageEl).toHaveAttribute(
      'src',
      'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    );
    expect(firstHorizontalNameEl).toHaveTextContent(/Spicy Arrabiata Penne/i);
    expect(firstHorizontalTopTextEl).toHaveTextContent(/Vegetarian - Italian/i);
    expect(firstHorizontalShareBtnEl).toHaveAttribute('src', 'shareIcon.svg');
    expect(firstHorizontalFavoriteBtnEl).toHaveAttribute('src', 'blackHeartIcon.svg');
  });

  it('Verifica se o botão "Drinks" realmente filtra os elementos', () => {
    renderWithRouter(<FavoriteRecipes />);

    const filterByDrinkBtnEl = screen.getByTestId(filterByDrinkBtnStr);
    userEvent.click(filterByDrinkBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);

    expect(firstHorizontalImageEl).toHaveAttribute(
      'src',
      'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    );
    expect(firstHorizontalNameEl).toHaveTextContent(/Aquamarine/i);
    expect(firstHorizontalTopTextEl).toHaveTextContent(/Alcoholic/i);
    expect(firstHorizontalShareBtnEl).toHaveAttribute('src', 'shareIcon.svg');
    expect(firstHorizontalFavoriteBtnEl).toHaveAttribute('src', 'blackHeartIcon.svg');
  });

  it('Verifica se ao clicar no botão de "desfavoritar" a respectiva receita é removida da tela e removida do localStorage', () => {
    localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(mealAndDrinkList));
    renderWithRouter(<FavoriteRecipes />);

    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');
    const secondHorizontalFavoriteBtnEl = screen.getByTestId('1-horizontal-favorite-btn');
    userEvent.click(secondHorizontalFavoriteBtnEl);
    expect(secondHorizontalImageEl).not.toBeInTheDocument();
    expect(secondHorizontalNameEl).not.toBeInTheDocument();
    expect(secondHorizontalTopTextEl).not.toBeInTheDocument();
    expect(secondHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(secondHorizontalFavoriteBtnEl).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(mealList);
  });

  it('Verifica se ao clicar no botão de filtro "Meal" e no botão de "desfavoritar" a respectiva receita é removida da tela e removida do localStorage', () => {
    localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(mealAndDrinkList));
    renderWithRouter(<FavoriteRecipes />);

    const filterByMealBtnEl = screen.getByTestId(filterByMealBtnStr);
    userEvent.click(filterByMealBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);
    userEvent.click(firstHorizontalFavoriteBtnEl);
    expect(firstHorizontalImageEl).not.toBeInTheDocument();
    expect(firstHorizontalNameEl).not.toBeInTheDocument();
    expect(firstHorizontalTopTextEl).not.toBeInTheDocument();
    expect(firstHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(firstHorizontalFavoriteBtnEl).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(drinkList);
  });

  it('Verifica se ao clicar no botão de filtro "All" e no botão de "desfavoritar" a respectiva receita é removida da tela e removida do localStorage', () => {
    localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(mealAndDrinkList));
    renderWithRouter(<FavoriteRecipes />);

    const filterByAllBbtn = screen.getByTestId('filter-by-all-btn');
    userEvent.click(filterByAllBbtn);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);
    userEvent.click(firstHorizontalFavoriteBtnEl);
    expect(firstHorizontalImageEl).not.toBeInTheDocument();
    expect(firstHorizontalNameEl).not.toBeInTheDocument();
    expect(firstHorizontalTopTextEl).not.toBeInTheDocument();
    expect(firstHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(firstHorizontalFavoriteBtnEl).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(drinkList);
  });

  it('Verifica se ao clicar no botão de filtro "Drink" e no botão de "desfavoritar" a respectiva receita é removida da tela e removida do localStorage', () => {
    localStorage.clear();
    localStorage.setItem('favoriteRecipes', JSON.stringify(mealAndDrinkList));
    renderWithRouter(<FavoriteRecipes />);

    const filterByDrinkBtnEl = screen.getByTestId(filterByDrinkBtnStr);
    userEvent.click(filterByDrinkBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const firstHorizontalFavoriteBtnEl = screen.getByTestId(zeroHorizontalFavoriteBtnStr);
    userEvent.click(firstHorizontalFavoriteBtnEl);
    expect(firstHorizontalImageEl).not.toBeInTheDocument();
    expect(firstHorizontalNameEl).not.toBeInTheDocument();
    expect(firstHorizontalTopTextEl).not.toBeInTheDocument();
    expect(firstHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(firstHorizontalFavoriteBtnEl).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual(mealList);
  });
});
