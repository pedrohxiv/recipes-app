// import React from 'react';
// import { screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// import renderWithRouter from './helpers/renderWithRouter';
// import { RecipeProvider } from '../context/RecipeContext';
// import App from '../App';
// import { meals } from '../../cypress/mocks/meals';

// describe('Testa o componente Searchbar', () => {
//   test('Testa se filtros filtram', async () => {
//     const { history } = renderWithRouter(
//       <RecipeProvider>
//         <App />
//       </RecipeProvider>,
//     );
//     history.push('/meals');

//     jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue(meals),
//     });
//     const btnShowSearch = screen.getByTestId('btn-show-search');
//     expect(btnShowSearch).toBeInTheDocument();
//   });
//   // test('Testa icon perfil leva para /profile', async () => {
//   //   const { history } = renderWithRouter(
//   //     <RecipeProvider>
//   //       <Header title="meals" />
//   //     </RecipeProvider>,
//   //   );
//   //   const btnProfile = screen.getByTestId('btn-profile');
//   //   userEvent.click(btnProfile);
//   //   expect(history.location.pathname).toBe('/profile');
//   // });
// });
