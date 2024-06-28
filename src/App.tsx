import { useState } from "react";

import { MealType } from "./types";
import AddPostMeal from "./components/AddPostMeal";

function App() {
  const [meals, setMeals] = useState<MealType[] | []>([]);
  console.log(meals);

  const addNewMeal = (newMeal: MealType) => {
    setMeals([...meals, newMeal]);
  };

  return (
    <main>
      <h1>Track My Bite</h1>
      <AddPostMeal addNewMeal={addNewMeal} />
    </main>
  );
}

export default App;
