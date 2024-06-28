import { MealType } from "../types";

interface MealsProps {
  meals: [] | MealType[];
}

const Meals = ({ meals }: MealsProps) => {
  const mealElements = meals.map((meal) => (
    <li key={meal.id}>
      <span className="font-semibold">Food:</span> {meal.food}{" "}
      <span className="font-semibold">Quantity:</span> {meal.quantity}{" "}
      <span className="font-semibold">Calories:</span> {meal.calories}
    </li>
  ));
  return (
    <section className="flex flex-col items-center justify-center border border-red-400 mt-10">
      <h3 className="font-bold text-2xl">Today's Meals</h3>
      <ul>{mealElements}</ul>
    </section>
  );
};

export default Meals;
