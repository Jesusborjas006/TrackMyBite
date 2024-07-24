import { useEffect, useState } from "react";
import { MealType } from "./types";
import Meals from "./components/Meals";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddPostMealModal from "./components/AddPostMealModal";
import MealEntryTable from "./components/MealEntryTable";

function App() {
  const [userInfo, setUserInfo] = useState({
    user: "",
    calorieGoal: "",
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
  });
  const [meals, setMeals] = useState<MealType[]>([]);
  const [remainingCalories, setRemainingCalories] = useState("");
  const [totalMealCalories, setTotalMealCalories] = useState("");
  const [detailedMeals, setDetailedMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [mealType, setMealType] = useState("");

  useEffect(() => {
    const totalCalorieIntake = meals.reduce((acc, currentMeal) => {
      return (acc +=
        Number(currentMeal.quantity) * Number(currentMeal.calories));
    }, 0);
    setRemainingCalories(userInfo.calorieGoal);
    setTotalMealCalories(String(totalCalorieIntake));

    if (!totalCalorieIntake) {
      return;
    } else {
      setRemainingCalories((prev) => String(+prev - totalCalorieIntake));
    }
  }, [meals, userInfo.calorieGoal]);

  const addNewMeal = (newMeal: MealType) => {
    setDetailedMeals({
      ...detailedMeals,
      [mealType]: [...detailedMeals[mealType], newMeal],
    });
  };

  const removeMeal = (id: number) => {
    const filteredMeals = meals.filter((meal) => {
      return meal.id !== id;
    });
    setMeals(filteredMeals);
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />}
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
              <section className="max-w-[1650px] px-6 ">
                <AddPostMealModal
                  addNewMeal={addNewMeal}
                  isDisplayed={isDisplayed}
                />
                <MealEntryTable
                  setMealType={setMealType}
                  setIsDisplayed={setIsDisplayed}
                />
                <Meals
                  meals={meals}
                  removeMeal={removeMeal}
                  totalMealCalories={totalMealCalories}
                  calorieGoal={userInfo.calorieGoal}
                  remainingCalories={remainingCalories}
                />
              </section>
            </>
          }
        />
        <Route
          path="/profile/:user"
          element={
            <>
              <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
              <Profile userInfo={userInfo} />{" "}
            </>
          }
        />
        <Route
          path="/edit/user"
          element={
            <>
              <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
              <EditProfile userInfo={userInfo} setUserInfo={setUserInfo} />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
