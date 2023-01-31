import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Test login screen', () => {
  it('Make sure email and password inputs are present.', () => {
    render(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();

    const password = screen.getByTestId('password-input');
    expect(password).toBeInTheDocument();

    const buttonLogin = screen.getByRole('button', { name: /entrar/i });
    expect(buttonLogin).toBeDisabled();

    userEvent.type(email, 'user@test.com');
    userEvent.type(password, '1234567');
    expect(buttonLogin).toBeEnabled();

    userEvent.click(buttonLogin);
    expect(JSON.parse(localStorage.getItem('user'))).toEqual({ email: 'user@test.com' });
  });
});
