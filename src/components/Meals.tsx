import { Link } from "react-router-dom";
import { MealType } from "../types";

interface MealsProps {
  meals: [] | MealType[];
  removeMeal: (id: number) => void;
  totalMealCalories: string;
  calorieGoal: string;
  remainingCalories: string;
}

const Meals = ({
  meals,
  removeMeal,
  totalMealCalories,
  calorieGoal,
  remainingCalories,
}: MealsProps) => {
  const mealElements = meals.map((meal) => (
    <li key={meal.id}>
      <span className="font-semibold">Food:</span> {meal.food}{" "}
      <span className="font-semibold">Quantity:</span> {meal.quantity}{" "}
      <span className="font-semibold">Total Calories:</span>{" "}
      {meal.quantity * Number(meal.calories)}
      <button
        className="border border-black px-2 ml-2"
        onClick={() => removeMeal(meal.id)}
      >
        Remove Item
      </button>
    </li>
  ));

  let content;
  if (+remainingCalories === 0) {
    content = <p>Goal has been met!</p>;
  } else if (+remainingCalories > 0) {
    content = <p>Calories Remaining: {remainingCalories}</p>;
  } else {
    content = (
      <p>
        You're {Math.abs(+calorieGoal - +totalMealCalories)} calories over the
        goal!
      </p>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <ul className="space-y-3 mt-14">{mealElements}</ul>

      <div>
        <h3 className="mt-10 text-3xl">{content}</h3>
        <p>Goal: {calorieGoal} calories</p>
        <p>Food: {totalMealCalories} calories</p>
        <Link
          className="border p-1 bg-black text-white hover:bg-green-900 active:bg-green-300 inline-block mt-4"
          to={"/edit/user"}
        >
          Change Calorie Goal
        </Link>
      </div>
    </section>
  );
};

export default Meals;
