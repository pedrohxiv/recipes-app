import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrinkDetail from '../components/DrinkDetail';
import MealDetail from '../components/MealDetail';

function RecipeDetails() {
  return (
    <div>
      <Switch>
        <Route path="/meals/:id" component={ MealDetail } />
        <Route path="/drinks/:id" component={ DrinkDetail } />
      </Switch>
    </div>
  );
}

export default RecipeDetails;
