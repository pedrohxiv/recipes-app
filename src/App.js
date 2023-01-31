import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import RecipeInProgress from './pages/RecipeInProgress';
import AppProvider from './context/AppProvider';
import Meals from './pages/Meals';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AppProvider>
            <Route exact path="/" component={ Login } />
            <Route exact path="/meals" component={ Meals } />
            <Route path="/profile" component={ Profile } />
            <Route path="/done-recipes" component={ DoneRecipes } />
            <Route path="/favorite-recipes" component={ FavoriteRecipes } />
            <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />
            <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
            <Route path="/foods/:id" component={ RecipeDetails } />
            <Route path="/drinks/:id" component={ RecipeDetails } />
            <Route path="/foods" component={ Recipes } />
            <Route path="/drinks" component={ Recipes } />
          </AppProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
