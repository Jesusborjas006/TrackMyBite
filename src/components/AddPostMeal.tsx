import { useState } from "react";
import { MealType } from "../types";

interface AddPostMealProps {
  addNewMeal: (newMeal: MealType) => void;
}

const AddPostMeal = ({ addNewMeal }: AddPostMealProps) => {
  const [meal, setMeal] = useState({
    food: "",
    quantity: 1,
    calories: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (meal.food && meal.quantity && meal.calories) {
      const newMeal = {
        id: Date.now(),
        food: meal.food,
        quantity: meal.quantity,
        calories: meal.calories,
      };
      addNewMeal(newMeal);
      setMeal({ food: "", quantity: 1, calories: "" });
    }
  };

  return (
    <form className="flex justify-center gap-x-4 mt-10">
      <label htmlFor="food">
        Food:
        <input
          className="border border-black ml-1"
          id="food"
          type="text"
          name="food"
          value={meal.food}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="quantity">
        Quantity:
        <select
          className="border border-black ml-1"
          id="qauntity"
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
          className="border border-black ml-1 w-[100px]"
          id="calories"
          type="number"
          name="calories"
          value={meal.calories}
          onChange={handleChange}
        />
      </label>

      <button className="border border-black px-2" onClick={onSubmit}>
        Add Meal
      </button>
    </form>
  );
};

export default AddPostMeal;
