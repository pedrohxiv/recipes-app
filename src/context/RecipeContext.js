import { createContext } from 'react';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const values = 'oi';
  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {}.isRequired;
