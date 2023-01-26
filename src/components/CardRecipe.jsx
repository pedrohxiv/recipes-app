import React from 'react';
import { Link } from 'react-router-dom';

function CardRecipe({ image, title, index, id, isMeal }) {
  return (
    <Link to={ isMeal ? `/meals/${id}` : `/drinks/${id}` }>
      <div data-testid={ `${index}-recommendation-card` }>
        <img
          src={ image }
          alt={ title }
          height="50px"
          data-testid={ `${index}-card-img` }
        />

        <span data-testid={ `${index}-card-name` }>
          { title }
        </span>
      </div>
    </Link>
  );
}

CardRecipe.propTypes = {}.isRequired;

export default CardRecipe;
