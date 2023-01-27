import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import MealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div>
      <footer data-testid="footer" style={ { position: 'fixed', bottom: 0 } }>
        <Link to="/drinks">
          <input
            data-testid="drinks-bottom-btn"
            type="image"
            src={ DrinkIcon }
            alt="DrinkIcon"
            style={ {
              aspectRatio: '1/1',
              width: '20px',
            } }
          />
        </Link>
        <Link to="/meals">
          <input
            data-testid="meals-bottom-btn"
            type="image"
            src={ MealIcon }
            alt="Meal Icon"
            style={ {
              aspectRatio: '1/1',
              width: '20px',
            } }
          />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
