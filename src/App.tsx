import { useEffect, useState } from "react";
import { MealType } from "./types";
import AddPostMeal from "./components/AddPostMeal";
import Logo from "./components/Logo";
import Meals from "./components/Meals";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const [meals, setMeals] = useState<MealType[]>([]);
  const [caloriesRemaining, setCaloriesRemaining] = useState(2000);
  const [totalMealCalories, setTotalMealCalories] = useState(0);

  useEffect(() => {
    const totalCalorieIntake = meals.reduce((acc, currentMeal) => {
      return (acc += currentMeal.quantity * Number(currentMeal.calories));
    }, 0);
    setTotalMealCalories(totalCalorieIntake);
    setCaloriesRemaining(2000 - totalCalorieIntake);
  }, [meals]);

  const addNewMeal = (newMeal: MealType) => {
    setMeals((prevMeals) => [...prevMeals, newMeal]);
  };

  const removeMeal = (id: number) => {
    const filteredMeals = meals.filter((meal) => {
      return meal.id !== id;
    });
    setMeals(filteredMeals);
  };

  return (
    <main className="max-w-[1650px] px-6 ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Logo />
              <AddPostMeal addNewMeal={addNewMeal} />
              <Meals
                meals={meals}
                removeMeal={removeMeal}
                caloriesRemaining={caloriesRemaining}
                totalMealCalories={totalMealCalories}
              />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
