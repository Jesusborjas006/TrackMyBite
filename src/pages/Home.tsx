import DateWidget from "../components/DateWidget";
import AddPostMealModal from "../components/AddPostMealModal";
import MealEntryTable from "../components/MealEntryTable";
import CaloriesRemaining from "../components/CaloriesRemaining";
import { MealType } from "../types";

interface HomeProps {
  remainingCalories: string;
  userInfo: {
    user: string;
    calorieGoal: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
  mealCaloriesConsumed: string;
  addNewMeal: (newMeal: MealType) => void;
  isModalDisplayed: boolean;
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  mealType: string;
  setMealType: React.Dispatch<React.SetStateAction<string>>;
  detailedMeals: {
    breakfast: never[];
    lunch: never[];
    dinner: never[];
  };
  removeItemById: (mealType: string, id: number) => void;
}

const Home = ({
  remainingCalories,
  userInfo,
  mealCaloriesConsumed,
  addNewMeal,
  isModalDisplayed,
  setIsModalDisplayed,
  mealType,
  setMealType,
  detailedMeals,
  removeItemById,
}: HomeProps) => {
  return (
    <section className="max-w-[1650px] px-6 ">
      <AddPostMealModal
        addNewMeal={addNewMeal}
        isModalDisplayed={isModalDisplayed}
        setIsModalDisplayed={setIsModalDisplayed}
        mealType={mealType}
      />
      <div className="flex flex-col my-10">
        <h3 className="font-bold text-2xl  mb-2 text-center">Today's Meals</h3>
        <DateWidget />
      </div>

      <section className="flex">
        <MealEntryTable
          setMealType={setMealType}
          setIsModalDisplayed={setIsModalDisplayed}
          detailedMeals={detailedMeals}
          removeItemById={removeItemById}
        />
        <CaloriesRemaining
          userInfo={userInfo}
          remainingCalories={remainingCalories}
          mealCaloriesConsumed={mealCaloriesConsumed}
        />
      </section>
    </section>
  );
};

export default Home;
