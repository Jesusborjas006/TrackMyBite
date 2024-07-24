import { useEffect, useState } from "react";
import { MealType } from "./types";
import AddPostMeal from "./components/AddPostMeal";
import Meals from "./components/Meals";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

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
    setMeals((prevMeals) => [...prevMeals, newMeal]);
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
                <AddPostMeal addNewMeal={addNewMeal} />
                <div className="shadow-md rounded-xl bg-white w-[300px] mx-auto mt-10">
                  <ul className="py-4 px-6 space-y-4">
                    <li className="text-lg font-semibold flex items-center justify-between">
                      Breakfast
                      <button className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]">
                        +
                      </button>
                    </li>
                    <hr />
                    <li className="text-lg font-semibold flex items-center justify-between">
                      Lunch
                      <button className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]">
                        +
                      </button>
                    </li>
                    <hr />
                    <li className="text-xl font-semibold flex items-center justify-between">
                      Dinner
                      <button className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]">
                        +
                      </button>
                    </li>
                    <hr />
                  </ul>
                </div>
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
