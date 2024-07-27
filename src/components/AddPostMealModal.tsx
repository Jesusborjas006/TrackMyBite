import { useState } from "react";
import { MealType } from "../types";

interface AddPostMealModalProps {
  addNewMeal: (newMeal: MealType) => void;
  isModalDisplayed: boolean;
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPostMealModal = ({
  addNewMeal,
  isModalDisplayed,
  setIsModalDisplayed,
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

  const handleModalClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsModalDisplayed(false);
  };

  return (
    <section
      className={
        isModalDisplayed
          ? " fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          : "hidden"
      }
    >
      <form
        className={
          isModalDisplayed
            ? "border flex flex-col py-4 px-6 gap-y-3 bg-white shadow-md rounded-xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "
            : "hidden"
        }
      >
        <button
          className="font-semibold text-2xl self-end hover:text-red-600"
          onClick={handleModalClose}
        >
          X
        </button>
        <div className="flex flex-col">
          <label>Food:</label>
          <input
            className="border border-black px-2"
            type="text"
            placeholder="food"
            name="food"
            value={mealInfo.food}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Quantity:</label>
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
        </div>
        <div className="flex flex-col">
          <label htmlFor="calories">Calories Per Item:</label>
          <input
            className="border border-black ml-1 w-[100px]"
            id="calories"
            type="number"
            name="calories"
            value={mealInfo.calories}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-green-400 hover:bg-green-500 py-2 px-3 rounded-sm mt-2"
          onClick={onSubmit}
        >
          Add food
        </button>
      </form>
    </section>
  );
};

export default AddPostMealModal;
