import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { RecipeProvider } from '../context/RecipeContext';
import App from '../App';
import AppProvider from '../context/AppProvider';
import { meals } from '../../cypress/mocks/meals';

describe('Testa o componente Searchbar', () => {
  test('Testa se filtros filtram', async () => {
    const {history, getByTestId} = renderWithRouter(
      <RecipeProvider>
        <App />
      </RecipeProvider>,
    );
    history.push('/meals')  

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals),
    });
    await new Promise((resolve) => setTimeout(resolve, 3000)); // gambiarra
    const btnShowSearch = screen.getByTestId('btn-show-search');
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
