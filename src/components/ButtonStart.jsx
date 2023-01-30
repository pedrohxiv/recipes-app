import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

function ButtonStart() {
  const { inProgress, getLocalResponseProgress } = useLocalStorage();
  const history = useHistory();
  const local = useLocation();
  const { id } = useParams();

  const handleProgress = () => {
    if (local.pathname.includes('drinks')) {
      return history.push(`/drinks/${id}/in-progress`);
    }
    if (local.pathname.includes('meals')) {
      return history.push(`/meals/${id}/in-progress`);
    }
  };

  const redirection = () => (inProgress
    ? history.push(`${local.pathname}/in-progress`) : handleProgress());

  useEffect(() => {
    getLocalResponseProgress(id);
  }, []);

  return (
    <button
      type="submit"
      data-testid="start-recipe-btn"
      style={ { position: 'fixed', bottom: '0px' } }
      onClick={ redirection }
    >
      {inProgress ? 'Continue Recipe' : 'Start Recipe'}
    </button>
  );
}

export default ButtonStart;
