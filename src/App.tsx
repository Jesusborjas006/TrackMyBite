import { useEffect, useState } from "react";
import { MealType } from "./types";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";

function App() {
  const [userInfo, setUserInfo] = useState({
    user: "",
    calorieGoal: "",
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
  });
  const [remainingCalories, setRemainingCalories] = useState("");
  const [mealCaloriesConsumed, setMealCaloriesConsumed] = useState("");
  const [detailedMeals, setDetailedMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [mealType, setMealType] = useState("");

  useEffect(() => {
    const calculateTotalCalories = (meals) => {
      const allKeyValues = Object.values(meals).flat();
      const totalCalories = allKeyValues.reduce((acc, currentItem) => {
        return (acc += Number(currentItem.calories) * currentItem.quantity);
      }, 0);

      setMealCaloriesConsumed(totalCalories);
      setRemainingCalories(userInfo.calorieGoal - totalCalories);
    };
    calculateTotalCalories(detailedMeals);
  }, [detailedMeals, userInfo.calorieGoal]);

  const addNewMeal = (newMeal: MealType) => {
    setDetailedMeals({
      ...detailedMeals,
      [mealType]: [...detailedMeals[mealType], newMeal],
    });
  };

  const removeItemById = (mealType: string, id: number) => {
    setDetailedMeals((prevState) => ({
      ...prevState,
      [mealType]: prevState[mealType].filter(
        (item: { id: number }) => item.id !== id
      ),
    }));
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
              <Home
                remainingCalories={remainingCalories}
                userInfo={userInfo}
                mealCaloriesConsumed={mealCaloriesConsumed}
                addNewMeal={addNewMeal}
                isModalDisplayed={isModalDisplayed}
                setIsModalDisplayed={setIsModalDisplayed}
                mealType={mealType}
                setMealType={setMealType}
                detailedMeals={detailedMeals}
                removeItemById={removeItemById}
              />
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
