import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  const loginValidation = (userEmail) => {
    const passwordLength = 6;
    const emailValidation = /[a-zA-Z.\-'0-9]+@[a-zA-Z]+\.[a-z]/;
    const validatePassword = password.length > passwordLength;
    return emailValidation.test(userEmail) && validatePassword;
  };

  const onClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  return (
    <form>
      <label htmlFor="email">
        <input
          placeholder="Seu Email: "
          data-testid="email-input"
          value={ email }
          name="email"
          type="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        <input
          placeholder="Sua Senha: "
          data-testid="password-input"
          value={ password }
          name="password"
          type="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ !loginValidation(email) }
        onClick={ onClick }
      >
        Entrar
      </button>
    </form>

  );
}

export default Login;
