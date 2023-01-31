import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { RecipeProvider } from '../context/RecipeContext';
import Search from '../components/Search';
import Meals from '../pages/Meals';
import Header from '../components/Header';
import App from '../App';

describe('Testa o componente Searchbar', () => {
  test('Testa se input search aparece na tela', async () => {
    renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    const btnShowSearch = screen.getByTestId('btn-show-search');
    userEvent.click(btnShowSearch);
    const inputSearch = screen.getByTestId('search-input');
    const radioButtonIngredient = screen.getByTestId('ingredient-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputSearch, 'tomato');
    userEvent.click(radioButtonIngredient);
    userEvent.click(searchButton);
    waitFor(() => {
      const card = screen.getByTestId('5363-recipe-card');
      expect(card).toBeInTheDocument();
    });
  });
  // test('Testa icon perfil leva para /profile', async () => {
  //   const { history } = renderWithRouter(
  //     <RecipeProvider>
  //       <Header title="meals" />
  //     </RecipeProvider>,
  //   );
  //   const btnProfile = screen.getByTestId('btn-profile');
  //   userEvent.click(btnProfile);
  //   expect(history.location.pathname).toBe('/profile');
  // });
});
