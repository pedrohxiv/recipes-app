import React from 'react';

function Instructions({ howTo }) {
  return (
    <div>
      <h3>Instructions</h3>
      <span data-testid="instructions">{howTo}</span>
    </div>
  );
}

Instructions.propTypes = {}.isRequired;
export default Instructions;
