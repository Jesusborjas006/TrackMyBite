import { useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({
    food: "",
    quantity: 1,
    calories: "",
  });

  console.log(meals);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (meal.food && meal.quantity && meal.calories) {
      const newMeal = {
        id: Date.now(),
        food: meal.food,
        quantity: meal.quantity,
        calories: meal.calories,
      };
      addToMeals(newMeal);
    }
  };

  const addToMeals = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  return (
    <>
      <h1>Track My Bite</h1>
      <form>
        <label>Food:</label>
        <input
          type="text"
          name="food"
          onChange={handleChange}
          value={meal.food}
        />
        <label htmlFor="quantity">
          Quanity:
          <select
            id="quantity"
            name="quantity"
            value={meal.quantity}
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <label htmlFor="calories">
          Calories:
          <input
            id="calories"
            type="number"
            name="calories"
            value={meal.calories}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Add Meal</button>
      </form>
      {JSON.stringify(meals)}
    </>
  );
}

export default App;
