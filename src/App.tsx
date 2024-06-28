import { useState } from "react";

import { MealType } from "./types";
import AddPostMeal from "./components/AddPostMeal";
import Logo from "./components/Logo";

function App() {
  const [meals, setMeals] = useState<MealType[] | []>([]);

  const addNewMeal = (newMeal: MealType) => {
    setMeals([...meals, newMeal]);
  };

  return (
    <main className="max-w-[1650px] px-6 ">
      <Logo />
      <AddPostMeal addNewMeal={addNewMeal} />

      {meals.length > 0 && JSON.stringify(meals)}
    </main>
  );
}

export default App;
