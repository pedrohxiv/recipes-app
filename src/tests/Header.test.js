import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import Header from '../components/Header';
import { RecipeProvider } from '../context/RecipeContext';

describe('Testa o componente Search', () => {
  localStorage.setItem('user', '{"email":"email@mail.com"}');

  test('Testa se input search aparece na tela', async () => {
    renderWithRouter(
      <RecipeProvider>
        <Header title="meals" />
      </RecipeProvider>,
    );
    const btnShowSearch = screen.getByTestId('btn-show-search');
    userEvent.click(btnShowSearch);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
  });
  test('Testa icon perfil leva para /profile', async () => {
    const { history } = renderWithRouter(
      <RecipeProvider>
        <Header title="meals" />
      </RecipeProvider>,
    );
    const btnProfile = screen.getByTestId('btn-profile');
    userEvent.click(btnProfile);
    expect(history.location.pathname).toBe('/profile');
  });
  test('Testa se o botão profile', async () => {
    renderWithRouter(<Header />);

    expect(screen.getByTestId('page-title').innerHTML).toBe('Meals');
  });
});
