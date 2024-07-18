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
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState({
    user: user,
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
  });
  console.log(userInfo);
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
    <main>
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar user={user} setUser={setUser} />
              <section className="max-w-[1650px] px-6 ">
                <AddPostMeal addNewMeal={addNewMeal} />
                <Meals
                  meals={meals}
                  removeMeal={removeMeal}
                  caloriesRemaining={caloriesRemaining}
                  totalMealCalories={totalMealCalories}
                />
              </section>
            </>
          }
        />
        <Route
          path="/profile/:user"
          element={<Profile user={user} userInfo={userInfo} />}
        />
        <Route
          path="/edit/user"
          element={
            <EditProfile
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              user={user}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
