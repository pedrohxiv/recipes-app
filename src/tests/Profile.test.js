import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../pages/Profile';

describe('Renderize o componente "Profile"', () => {
  localStorage.setItem('user', '{"email":"email@mail.com"}');
  localStorage.setItem('doneRecipes', '[]');
  localStorage.setItem('favoriteRecipes', '[]');
  localStorage.setItem('inProgressRecipes', '{}');

  it('Verifica se os elementos da tela de perfil respeita os atributos descritos no protótipo', () => {
    renderWithRouter(<Profile />);

    const profileEmailEl = screen.getByTestId('profile-email');
    expect(profileEmailEl).toBeInTheDocument();
    const profileDoneBtnEl = screen.getByTestId('profile-done-btn');
    expect(profileDoneBtnEl).toBeInTheDocument();
    const profileFavoriteBtnEl = screen.getByTestId('profile-favorite-btn');
    expect(profileFavoriteBtnEl).toBeInTheDocument();
    const profileLogoutBtnEl = screen.getByTestId('profile-logout-btn');
    expect(profileLogoutBtnEl).toBeInTheDocument();
  });

  it('Verifica se o e-mail da pessoa usuária está visível na tela', () => {
    renderWithRouter(<Profile />);

    const profileEmailEl = screen.getByTestId('profile-email');
    expect(profileEmailEl).toHaveTextContent('email@mail.com');
  });

  it('Verifica se a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas', () => {
    const { history } = renderWithRouter(<Profile />);

    const profileDoneBtnEl = screen.getByTestId('profile-done-btn');
    userEvent.click(profileDoneBtnEl);
    expect(history.location.pathname).toBe('/done-recipes');
  });

  it('Verifica se a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas', () => {
    const { history } = renderWithRouter(<Profile />);

    const profileFavoriteBtnEl = screen.getByTestId('profile-favorite-btn');
    userEvent.click(profileFavoriteBtnEl);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('Verifica se a pessoa usuária que, ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login', () => {
    const { history } = renderWithRouter(<Profile />);

    expect(JSON.parse(localStorage.getItem('user'))).toEqual({ email: 'email@mail.com' });
    expect(localStorage.getItem('doneRecipes')).toEqual('[]');
    expect(localStorage.getItem('favoriteRecipes')).toEqual('[]');
    expect(localStorage.getItem('inProgressRecipes')).toEqual('{}');

    const profileLogoutBtnEl = screen.getByTestId('profile-logout-btn');
    userEvent.click(profileLogoutBtnEl);
    expect(history.location.pathname).toBe('/');

    expect(localStorage.getItem('email')).toBe(null);
    expect(localStorage.getItem('doneRecipes')).toBe(null);
    expect(localStorage.getItem('favoriteRecipes')).toBe(null);
    expect(localStorage.getItem('inProgressRecipes')).toBe(null);
  });
});
