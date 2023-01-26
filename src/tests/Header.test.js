import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Recipes from '../pages/Recipes';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa o componente Search', () => {
  test('Testa se input search aparece na tela', () => {
    renderWithRouter(<Recipes />);

    const btnShowSearch = screen.getByTestId('btn-show-search');
    userEvent.click(btnShowSearch);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
  });
  test('Testa icon perfil leva para /profile', () => {
    const { history } = renderWithRouter(<Recipes />);
    const btnProfile = screen.getByTestId('btn-profile');
    userEvent.click(btnProfile);
    expect(history.location.pathname).toBe('/profile');
  });
});
