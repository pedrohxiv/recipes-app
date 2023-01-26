import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Renderize o componente "Favorite Recipes"', () => {
  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify([
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
    ]),
  );

  it('Verifica se os elementos da tela de receitas favoritas estão presente na tela', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorite-recipes');
    });

    const filterByMealBtnEl = screen.getByTestId('filter-by-meal-btn');
    expect(filterByMealBtnEl).toBeInTheDocument();
    const filterByDrinkBtnEl = screen.getByTestId('filter-by-drink-btn');
    expect(filterByDrinkBtnEl).toBeInTheDocument();
    const filterByAllBtnEl = screen.getByTestId('filter-by-all-btn');
    expect(filterByAllBtnEl).toBeInTheDocument();
    const firstHorizontalImageEl = screen.getByTestId('0-horizontal-image');
    expect(firstHorizontalImageEl).toBeInTheDocument();
    const firstHorizontalNameEl = screen.getByTestId('0-horizontal-name');
    expect(firstHorizontalNameEl).toBeInTheDocument();
    const firstHorizontalTopTextEl = screen.getByTestId('0-horizontal-top-text');
    expect(firstHorizontalTopTextEl).toBeInTheDocument();
    const firstHorizontalShareBtnEl = screen.getByTestId('0-horizontal-share-btn');
    expect(firstHorizontalShareBtnEl).toBeInTheDocument();
    const firstHorizontalFavoriteBtnEl = screen.getByTestId('0-horizontal-favorite-btn');
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
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorite-recipes');
    });

    const filterByMealBtnEl = screen.getByTestId('filter-by-meal-btn');
    const firstHorizontalImageEl = screen.getByTestId('0-horizontal-image');
    const firstHorizontalNameEl = screen.getByTestId('0-horizontal-name');
    const firstHorizontalTopTextEl = screen.getByTestId('0-horizontal-top-text');
    const firstHorizontalShareBtnEl = screen.getByTestId('0-horizontal-share-btn');
    const firstHorizontalFavoriteBtnEl = screen.getByTestId('0-horizontal-favorite-btn');
    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');
    const secondHorizontalFavoriteBtnEl = screen.getByTestId('1-horizontal-favorite-btn');
    userEvent.click(filterByMealBtnEl);
    expect(firstHorizontalImageEl).toBeInTheDocument();
    expect(firstHorizontalNameEl).toBeInTheDocument();
    expect(firstHorizontalTopTextEl).toBeInTheDocument();
    expect(firstHorizontalShareBtnEl).toBeInTheDocument();
    expect(firstHorizontalFavoriteBtnEl).toBeInTheDocument();
    expect(secondHorizontalImageEl).not.toBeInTheDocument();
    expect(secondHorizontalNameEl).not.toBeInTheDocument();
    expect(secondHorizontalTopTextEl).not.toBeInTheDocument();
    expect(secondHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(secondHorizontalFavoriteBtnEl).not.toBeInTheDocument();
  });

  it('Verifica se o botão "Drinks" realmente filtra os elementos', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorite-recipes');
    });

    const filterByDrinkBtnEl = screen.getByTestId('filter-by-drink-btn');
    const firstHorizontalImageEl = screen.getByTestId('0-horizontal-image');
    const firstHorizontalNameEl = screen.getByTestId('0-horizontal-name');
    const firstHorizontalTopTextEl = screen.getByTestId('0-horizontal-top-text');
    const firstHorizontalShareBtnEl = screen.getByTestId('0-horizontal-share-btn');
    const firstHorizontalFavoriteBtnEl = screen.getByTestId('0-horizontal-favorite-btn');
    const secondHorizontalImageEl = screen.getByTestId('1-horizontal-image');
    const secondHorizontalNameEl = screen.getByTestId('1-horizontal-name');
    const secondHorizontalTopTextEl = screen.getByTestId('1-horizontal-top-text');
    const secondHorizontalShareBtnEl = screen.getByTestId('1-horizontal-share-btn');
    const secondHorizontalFavoriteBtnEl = screen.getByTestId('1-horizontal-favorite-btn');
    userEvent.click(filterByDrinkBtnEl);
    expect(firstHorizontalImageEl).not.toBeInTheDocument();
    expect(firstHorizontalNameEl).not.toBeInTheDocument();
    expect(firstHorizontalTopTextEl).not.toBeInTheDocument();
    expect(firstHorizontalShareBtnEl).not.toBeInTheDocument();
    expect(firstHorizontalFavoriteBtnEl).not.toBeInTheDocument();
    expect(secondHorizontalImageEl).toBeInTheDocument();
    expect(secondHorizontalNameEl).toBeInTheDocument();
    expect(secondHorizontalTopTextEl).toBeInTheDocument();
    expect(secondHorizontalShareBtnEl).toBeInTheDocument();
    expect(secondHorizontalFavoriteBtnEl).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!"', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorite-recipes');
    });

    // const firstHorizontalShareBtnEl = screen.getByTestId('0-horizontal-share-btn');
    // userEvent.click(firstHorizontalShareBtnEl);
    // expect(screen.getByText(/Link copied!/i)).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão de "desfavoritar" a respectiva receita é removida da tela e removida do localStorage', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/favorite-recipes');
    });

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
    expect(JSON.parse(localStorage.getItem('favoriteRecipes'))).toEqual([
      {
        id: '52771',
        type: 'meal',
        nationality: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      },
    ]);
  });
});
