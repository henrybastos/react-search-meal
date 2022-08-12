import './MealCard.css';

function MealCard ({ mealName, mealArea, mealCategory, mealThumb, mealSource, mealVideo}) {
  
  // useEffect(() => console.log('Meal Card Rendered'));

  return (
    <div className='meal-card'>
      <div className='meal-image'>
        <img src={mealThumb} alt={mealName} data-has-url={(mealSource || mealVideo) ? true : false} onClick={() => (mealSource || mealVideo) && window.open(mealSource || mealVideo, '_blank')}/>
      </div>
      <div className='meal-card-name'>
        <h2>{mealName}</h2>
      </div>
      <div className='meal-card-info'>
        <span>{mealCategory}</span>
        <p>{mealArea}</p>
      </div>
      {
        (mealVideo || mealSource) && <div className="meal-card-footer" data-has-double-url={(mealSource && mealVideo) ? true : false}>
          {mealVideo && <a href={mealVideo}>Video</a>}
          {mealSource && <a href={mealSource}>Source</a>}
        </div>
      }
    </div>
  );
}

export default MealCard;