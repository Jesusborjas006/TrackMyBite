import { useState } from "react";
import { MealType } from "../types";

interface AddPostMealModalProps {
  addNewMeal: (newMeal: MealType) => void;
  isDisplayed: boolean;
}

const AddPostMealModal = ({
  addNewMeal,
  isDisplayed,
}: AddPostMealModalProps) => {
  const [mealInfo, setMealInfo] = useState({
    food: "",
    quantity: 1,
    calories: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMealInfo({ ...mealInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (mealInfo.food && mealInfo.quantity && mealInfo.calories) {
      const newMeal = {
        id: Date.now(),
        food: mealInfo.food,
        quantity: mealInfo.quantity,
        calories: mealInfo.calories,
      };
      addNewMeal(newMeal);
      setMealInfo({ food: "", quantity: 1, calories: "" });
    }
  };

  return (
    <form className={isDisplayed ? "block" : "hidden"}>
      <label>
        Food:
        <input
          className="border border-black px-2"
          type="text"
          placeholder="food"
          name="food"
          value={mealInfo.food}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="quantity">
        Quantity:
        <select
          className="border border-black ml-1"
          id="qauntity"
          name="quantity"
          value={mealInfo.quantity}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </label>
      <label htmlFor="calories">
        Calories Per Item:
        <input
          className="border border-black ml-1 w-[100px]"
          id="calories"
          type="number"
          name="calories"
          value={mealInfo.calories}
          onChange={handleChange}
        />
      </label>
      <button className="border border-black px-2" onClick={onSubmit}>
        Add food
      </button>
    </form>
  );
};

export default AddPostMealModal;
