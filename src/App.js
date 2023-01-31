import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import RecipeInProgress from './pages/RecipeInProgress';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/meals/:id" component={ RecipeDetails } />
          <Route path="/drinks/:id" component={ RecipeDetails } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/meals" component={ Meals } />
        </Switch>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
