import { useLocation } from 'react-router-dom';
import useMeals from '../hooks/useMeals';
import CardRecipe from '../components/CardRecipe';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Meals() {
  const { meals } = useMeals();
  const { pathname } = useLocation();

  if (pathname !== '/meals') return;

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
