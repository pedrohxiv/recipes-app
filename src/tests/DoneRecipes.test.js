import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';

const mealAndDrinkList = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

const filterByMealBtnStr = 'filter-by-meal-btn';
const filterByDrinkBtnStr = 'filter-by-drink-btn';
const zeroHorizontalImageStr = '0-horizontal-image';
const zeroHorizontalNameStr = '0-horizontal-name';
const zeroHorizontalTopTextStr = '0-horizontal-top-text';
const zeroHorizontalDoneDateStr = '0-horizontal-done-date';
const zeroPastaHorizontalTagStr = '0-Pasta-horizontal-tag';
const zeroCurryHorizontalTagStr = '0-Curry-horizontal-tag';
const zeroHorizontalShareBtnStr = '0-horizontal-share-btn';
const shareIconStr = 'shareIcon.svg';

describe('Renderize o componente "Done Recipes"', () => {
  localStorage.setItem('doneRecipes', JSON.stringify(mealAndDrinkList));

  it('Verifica se os elementos da tela de receitas favoritas estão presente na tela', () => {
    renderWithRouter(<DoneRecipes />);

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
    const firstHorizontalDoneDateEl = screen.getByTestId(zeroHorizontalDoneDateStr);
    expect(firstHorizontalDoneDateEl).toBeInTheDocument();
    const firstPastaHorizontalTagEl = screen.getByTestId(zeroPastaHorizontalTagStr);
    expect(firstPastaHorizontalTagEl).toBeInTheDocument();
    const firstCurryHorizontalTagEl = screen.getByTestId(zeroCurryHorizontalTagStr);
    expect(firstCurryHorizontalTagEl).toBeInTheDocument();
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    expect(firstHorizontalShareBtnEl).toBeInTheDocument();
    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    expect(secondHorizontalImageEl).toBeInTheDocument();
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    expect(secondHorizontalNameEl).toBeInTheDocument();
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    expect(secondHorizontalTopTextEl).toBeInTheDocument();
    const secondHorizontalDoneDateEl = screen.getByTestId('1-horizontal-done-date');
    expect(secondHorizontalDoneDateEl).toBeInTheDocument();
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');
    expect(secondHorizontalShareBtnEl).toBeInTheDocument();
  });

  it('Verifica se o botão "Meals" realmente filtra os elementos', () => {
    renderWithRouter(<DoneRecipes />);

    const filterByMealBtnEl = screen.getByTestId(filterByMealBtnStr);
    userEvent.click(filterByMealBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalDoneDateEl = screen.getByTestId(zeroHorizontalDoneDateStr);
    const firstPastaHorizontalTagEl = screen.getByTestId(zeroPastaHorizontalTagStr);
    const firstCurryHorizontalTagEl = screen.getByTestId(zeroCurryHorizontalTagStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);

    expect(firstHorizontalImageEl).toHaveAttribute('src', mealAndDrinkList[0].image);
    expect(firstHorizontalNameEl).toHaveTextContent(/Spicy Arrabiata Penne/i);
    expect(firstHorizontalTopTextEl).toHaveTextContent(/Vegetarian - Italian/i);
    expect(firstHorizontalDoneDateEl).toHaveTextContent(mealAndDrinkList[0].doneDate);
    expect(firstPastaHorizontalTagEl).toHaveTextContent(/Pasta/i);
    expect(firstCurryHorizontalTagEl).toHaveTextContent(/Curry/i);
    expect(firstHorizontalShareBtnEl).toHaveAttribute('src', shareIconStr);
  });

  it('Verifica se o botão "Drinks" realmente filtra os elementos', () => {
    renderWithRouter(<DoneRecipes />);

    const filterByDrinkBtnEl = screen.getByTestId(filterByDrinkBtnStr);
    userEvent.click(filterByDrinkBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalDoneDateEl = screen.getByTestId(zeroHorizontalDoneDateStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);

    expect(firstHorizontalImageEl).toHaveAttribute('src', mealAndDrinkList[1].image);
    expect(firstHorizontalNameEl).toHaveTextContent(/Aquamarine/i);
    expect(firstHorizontalTopTextEl).toHaveTextContent(/Alcoholic/i);
    expect(firstHorizontalDoneDateEl).toHaveTextContent(mealAndDrinkList[1].doneDate);
    expect(firstHorizontalShareBtnEl).toHaveAttribute('src', shareIconStr);
  });

  it('Verifica se o botão "All" realmente filtra os elementos', () => {
    renderWithRouter(<DoneRecipes />);

    const filterByAllBtnEl = screen.getByTestId('filter-by-all-btn');
    userEvent.click(filterByAllBtnEl);
    const firstHorizontalImageEl = screen.getByTestId(zeroHorizontalImageStr);
    const firstHorizontalNameEl = screen.getByTestId(zeroHorizontalNameStr);
    const firstHorizontalTopTextEl = screen.getByTestId(zeroHorizontalTopTextStr);
    const firstHorizontalDoneDateEl = screen.getByTestId(zeroHorizontalDoneDateStr);
    const firstPastaHorizontalTagEl = screen.getByTestId(zeroPastaHorizontalTagStr);
    const firstCurryHorizontalTagEl = screen.getByTestId(zeroCurryHorizontalTagStr);
    const firstHorizontalShareBtnEl = screen.getByTestId(zeroHorizontalShareBtnStr);
    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    const secondHorizontalDoneDateEl = screen.getByTestId('1-horizontal-done-date');
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');

    expect(firstHorizontalImageEl).toHaveAttribute('src', mealAndDrinkList[0].image);
    expect(firstHorizontalNameEl).toHaveTextContent(/Spicy Arrabiata Penne/i);
    expect(firstHorizontalTopTextEl).toHaveTextContent(/Italian - Vegetarian/i);
    expect(firstHorizontalDoneDateEl).toHaveTextContent(mealAndDrinkList[0].doneDate);
    expect(firstPastaHorizontalTagEl).toHaveTextContent(/Pasta/i);
    expect(firstCurryHorizontalTagEl).toHaveTextContent(/Curry/i);
    expect(firstHorizontalShareBtnEl).toHaveAttribute('src', shareIconStr);
    expect(secondHorizontalImageEl).toHaveAttribute('src', mealAndDrinkList[1].image);
    expect(secondHorizontalNameEl).toHaveTextContent(/Aquamarine/i);
    expect(secondHorizontalTopTextEl).toHaveTextContent(/Alcoholic/i);
    expect(secondHorizontalDoneDateEl).toHaveTextContent(mealAndDrinkList[1].doneDate);
    expect(secondHorizontalShareBtnEl).toHaveAttribute('src', shareIconStr);
  });
});
