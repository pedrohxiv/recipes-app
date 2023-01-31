import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
  }), [email, password]);

  return (
    <AppContext.Provider value={ login }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default AppProvider;
