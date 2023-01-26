import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from '../components/Drinks';
import Meals from '../components/Meals';

function Recipes() {
  return (
    <div>
      <Switch>
        <Route path="/meals" component={ Meals } />
        <Route path="/drinks" component={ Drinks } />
      </Switch>
    </div>
  );
}

export default Recipes;
