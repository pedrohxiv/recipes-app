import { useHistory, useLocation } from 'react-router-dom';
import useMeals from '../hooks/useMeals';
import CardRecipe from '../components/CardRecipe';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Meals() {
  const { meals } = useMeals();
  const { pathname } = useLocation();
  const history = useHistory();

  if (pathname !== '/meals') return;

  if (meals && meals.length === 1) {
    history.push(`/meals/${meals[0].idMeal}`);
  }
  return (
    <div>
      <Header title="Meals" />
      <CategoryFilter />
      {meals && meals.slice(0, Number('12')).map((meal, index) => (
        <CardRecipe
          key={ meal.idMeal }
          image={ meal.strMealThumb }
          title={ meal.strMeal }
          index={ index }
          id={ meal.idMeal }
          isMeal
        />
      ))}
      <Footer />
    </div>
  );
}

export default Meals;
