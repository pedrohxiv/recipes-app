import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinksInProgress from '../components/DrinksInProgress';
import MealsInProgress from '../components/MealsInProgress';

function RecipeInProgress() {
  return (
    <div>
      <Switch>
        <Route path="/meals/:id/in-progress" component={ MealsInProgress } />
        <Route path="/drinks/:id/in-progress" component={ DrinksInProgress } />
      </Switch>
    </div>
  );
}

export default RecipeInProgress;
