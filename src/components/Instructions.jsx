import React from 'react';

function Instructions({ howTo }) {
  return (
    <div>
      <span data-testid="instructions">{howTo}</span>
    </div>
  );
}

Instructions.propTypes = {}.isRequired;
export default Instructions;
