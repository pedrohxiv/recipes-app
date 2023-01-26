import { useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <p data-testid="profile-email">{email}</p>
      <button
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
      >
        Logout
      </button>
    </>
  );
}
