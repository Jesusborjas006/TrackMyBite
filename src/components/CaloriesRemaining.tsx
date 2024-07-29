import { Link } from "react-router-dom";

interface CaloriesRemainingProps {
  userInfo: {
    user: string;
    calorieGoal: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
  remainingCalories: string;
  mealCaloriesConsumed: string;
}

const CaloriesRemaining = ({
  userInfo,
  remainingCalories,
  mealCaloriesConsumed,
}: CaloriesRemainingProps) => {
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
  );
};

export default CaloriesRemaining;
