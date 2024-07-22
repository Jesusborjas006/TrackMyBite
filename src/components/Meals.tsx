import { MealType } from "../types";
import DateWidget from "./DateWidget";

interface MealsProps {
  meals: [] | MealType[];
  removeMeal: (id: number) => void;
  caloriesRemaining: number;
  totalMealCalories: number;
  calorieGoal: string;
}

const Meals = ({
  meals,
  removeMeal,
  caloriesRemaining,
  totalMealCalories,
  calorieGoal,
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
  if (+calorieGoal === 0) {
    content = <p>Goal has been met!</p>;
  } else if (+calorieGoal > 0) {
    content = <p>Calories Remaining: {calorieGoal}</p>;
  } else {
    content = (
      <p>
        You're {Math.abs(+calorieGoal - totalMealCalories)} calories over the
        goal!
      </p>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h3 className="font-bold text-2xl mb-2">Today's Meals</h3>
      <DateWidget />
      <ul className="space-y-3 mt-14">{mealElements}</ul>

      <div>
        <h3 className="mt-10 text-3xl">{content}</h3>
        <p>Goal: {calorieGoal} calories</p>
        <p>Food: {totalMealCalories} calories</p>
      </div>
    </section>
  );
};

export default Meals;
