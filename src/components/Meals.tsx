// import { Link } from "react-router-dom";

// interface MealsProps {
//   totalMealCalories: string;
//   calorieGoal: string;
//   remainingCalories: string;
// }

// const Meals = ({
//   totalMealCalories,
//   calorieGoal,
//   remainingCalories,
// }: MealsProps) => {
// let content;
// if (+remainingCalories === 0) {
//   content = <p>Goal has been met!</p>;
// } else if (+remainingCalories > 0) {
//   content = <p>Calories Remaining: {remainingCalories}</p>;
// } else {
//   content = (
//     <p>
//       You're {Math.abs(+calorieGoal - +totalMealCalories)} calories over the
//       goal!
//     </p>
//   );
// }

//   return (
//     <section className="flex flex-col items-center justify-center mt-10">
//       <div>
//         <h3 className="mt-10 text-3xl">{content}</h3>
//         <p>Goal: {calorieGoal} calories</p>
//         <p>Food: {totalMealCalories} calories</p>
//         <Link
//           className="border p-1 bg-black text-white hover:bg-green-900 active:bg-green-300 inline-block mt-4"
//           to={"/edit/user"}
//         >
//           Change Calorie Goal
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Meals;
