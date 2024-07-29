import { useEffect, useState } from "react";
import { MealType } from "./types";
// import Meals from "./components/Meals";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddPostMealModal from "./components/AddPostMealModal";
import MealEntryTable from "./components/MealEntryTable";
import DateWidget from "./components/DateWidget";
import { Link } from "react-router-dom";

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

  let content;
  if (+remainingCalories === 0) {
    content = <p>Goal has been met!</p>;
  } else if (+remainingCalories > 0) {
    content = <p>Calories Remaining: {remainingCalories}</p>;
  } else {
    content = (
      <p>
        You're {Math.abs(+userInfo.calorieGoal - +mealCaloriesConsumed)}{" "}
        calories over the goal!
      </p>
    );
  }

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
                  isModalDisplayed={isModalDisplayed}
                  setIsModalDisplayed={setIsModalDisplayed}
                  mealType={mealType}
                />
                <div className="flex flex-col my-10">
                  <h3 className="font-bold text-2xl  mb-2 text-center">
                    Today's Meals
                  </h3>
                  <DateWidget />
                </div>

                <section className="flex">
                  <MealEntryTable
                    setMealType={setMealType}
                    setIsModalDisplayed={setIsModalDisplayed}
                    detailedMeals={detailedMeals}
                    removeItemById={removeItemById}
                  />
                  <section className="flex flex-col items-center bg-white shadow-md rounded-xl w-[20%] mx-auto text-center py-10 h-fit">
                    <div>
                      <h3 className="text-xl mb-4">{content}</h3>
                      <p>Goal: {userInfo.calorieGoal} calories</p>
                      <p>Food: {mealCaloriesConsumed} calories</p>
                      <Link
                        className="border p-2 bg-black text-white hover:bg-green-900 active:bg-green-300 inline-block mt-4"
                        to={"/edit/user"}
                      >
                        Change Calorie Goal
                      </Link>
                    </div>
                  </section>
                </section>
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
