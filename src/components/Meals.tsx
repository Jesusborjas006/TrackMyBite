import { MealType } from "../types";
import DateWidget from "./DateWidget";

interface MealsProps {
  meals: [] | MealType[];
  removeMeal: (id: number) => void;
}

const Meals = ({ meals, removeMeal }: MealsProps) => {
  const mealElements = meals.map((meal) => (
    <li key={meal.id}>
      <span className="font-semibold">Food:</span> {meal.food}{" "}
      <span className="font-semibold">Quantity:</span> {meal.quantity}{" "}
      <span className="font-semibold">Calories:</span> {meal.calories}
      <button
        className="border border-black px-2 ml-2"
        onClick={() => removeMeal(meal.id)}
      >
        Remove Item
      </button>
    </li>
  ));

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h3 className="font-bold text-2xl mb-2">Today's Meals</h3>
      <DateWidget />
      <ul className="space-y-3 mt-14">{mealElements}</ul>
    </section>
  );
};

export default Meals;
