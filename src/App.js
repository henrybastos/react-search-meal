import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MealCard from './components/MealCard';
import SadEmoji from './components/SadEmoji';

function App() {
  const [mealsList, setMealsList] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState();

  const ERROR_ELEMENT_NOTHING_FOUND = () => {
    return (
      <div className='nothing-found error-msg'>
        <h2>Nothing found</h2>
        <SadEmoji />
      </div>
    );
  }

  const debounce = (stateTimeout, setStateTimeout, callback, time) => {
    // stateTimeout && console.log(stateTimeout);
    stateTimeout && clearTimeout(stateTimeout);
    setStateTimeout(setTimeout(callback, time));
  }

  useEffect(() => {
    searchFood('');
  }, []);

  const searchFood = (value) => {
    setMealsList(<h2 className='loading-text'>Loading...</h2>);

    debounce(searchTimeout, setSearchTimeout, () => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(body => {
          body?.meals ? setMealsList(body.meals.map(meal =>
              <MealCard 
                mealName={meal?.strMeal}
                mealArea={meal?.strArea}
                mealCategory={meal?.strCategory}
                mealSource={meal?.strSource}
                mealVideo={meal?.strYoutube}
                mealThumb={meal?.strMealThumb}
                key={meal?.idMeal}
              />)) 
            : setMealsList(ERROR_ELEMENT_NOTHING_FOUND);
          // console.log(`Searched: ${value}`);
        })
        .catch(err => console.error(err));
    }, 1000);
    }

  return (
    <>
      <header>
        <h1>Meal Search</h1>  
        <p>Data provided by <a href="https://www.themealdb.com/">The Meal DB</a></p>
        <div className='input-field'>
          <input type="text" defaultValue='' onChange={(e) => searchFood(e.target.value)}/>
        </div>
      </header>
      <main>
        {mealsList}
      </main>
    </>
  );
}

export default App;