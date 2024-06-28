import { useState } from "react";

import { MealType } from "./types";
import AddPostMeal from "./components/AddPostMeal";
import Logo from "./components/Logo";
import Meals from "./components/Meals";

function App() {
  const [meals, setMeals] = useState<MealType[] | []>([]);

  const addNewMeal = (newMeal: MealType) => {
    setMeals([...meals, newMeal]);
  };

  const removeMeal = (id: number) => {
    const filteredMeals = meals.filter((meal) => {
      return meal.id !== id;
    });
    setMeals(filteredMeals);
  };

  return (
    <main className="max-w-[1650px] px-6 ">
      <Logo />
      <AddPostMeal addNewMeal={addNewMeal} />
      <Meals meals={meals} removeMeal={removeMeal} />
    </main>
  );
}

export default App;
