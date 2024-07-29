interface MealEntryTableProps {
  setMealType: React.Dispatch<React.SetStateAction<string>>;
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  detailedMeals: {
    breakfast: never[];
    lunch: never[];
    dinner: never[];
  };
  removeItemById: (mealType: string, id: number) => void;
}

const MealEntryTable = ({
  setMealType,
  setIsModalDisplayed,
  detailedMeals,
  removeItemById,
}: MealEntryTableProps) => {
  return (
    <div className="shadow-md rounded-xl bg-white w-[70%] mx-auto py-4">
      <ul className="py-4 px-6 space-y-3">
        <li className="text-lg font-semibold flex items-center justify-between">
          Breakfast
          <button
            className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]"
            onClick={() => (
              setMealType("breakfast"), setIsModalDisplayed((prev) => !prev)
            )}
          >
            +
          </button>
        </li>
        <ul className="[&>*:nth-child(even)]:bg-[#ddd]">
          {detailedMeals.breakfast.map(
            (food: {
              id: number;
              food: string;
              quantity: number;
              calories: string;
            }) => (
              <li
                key={food.id}
                className="p-1 flex justify-between items-center "
              >
                <span>
                  <p>{food.food}</p>
                  <p className="text-xs">{food.quantity} item</p>
                </span>
                <span className="flex gap-x-4">
                  <p>{food.quantity * Number(food.calories)} kcal</p>
                  <button
                    className="bg-red-400 px-2 text-sm"
                    onClick={() => removeItemById("breakfast", food.id)}
                  >
                    Remove
                  </button>
                </span>
              </li>
            )
          )}
        </ul>
        <hr />
        <div>
          <li className="text-lg font-semibold flex items-center justify-between">
            Lunch
            <button
              className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]"
              onClick={() => (
                setMealType("lunch"), setIsModalDisplayed((prev) => !prev)
              )}
            >
              +
            </button>
          </li>
          <ul className="[&>*:nth-child(even)]:bg-[#ddd]">
            {detailedMeals.lunch.map(
              (food: {
                id: number;
                food: string;
                quantity: number;
                calories: string;
              }) => (
                <li
                  key={food.id}
                  className="p-1 flex justify-between items-center "
                >
                  <span>
                    <p>{food.food}</p>
                    <p className="text-xs">{food.quantity} item</p>
                  </span>
                  <span className="flex gap-x-4">
                    <p>{food.quantity * Number(food.calories)} kcal</p>
                    <button
                      className="bg-red-400 px-2 text-sm"
                      onClick={() => removeItemById("lunch", food.id)}
                    >
                      Remove
                    </button>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
        <hr />
        <li className="text-xl font-semibold flex items-center justify-between">
          Dinner
          <button
            className="text-2xl font-bold bg-green-400 rounded-full w-[40px] h-[40px]"
            onClick={() => (
              setMealType("dinner"), setIsModalDisplayed((prev) => !prev)
            )}
          >
            +
          </button>
        </li>
        <ul className="[&>*:nth-child(even)]:bg-[#ddd]">
          {detailedMeals.dinner.map(
            (food: {
              id: number;
              food: string;
              quantity: number;
              calories: string;
            }) => (
              <li
                key={food.id}
                className="p-1 flex justify-between items-center "
              >
                <span>
                  <p>{food.food}</p>
                  <p className="text-xs">{food.quantity} item</p>
                </span>
                <span className="flex gap-x-4">
                  <p>{food.quantity * Number(food.calories)} kcal</p>
                  <button
                    className="bg-red-400 px-2 text-sm"
                    onClick={() => removeItemById("dinner", food.id)}
                  >
                    Remove
                  </button>
                </span>
              </li>
            )
          )}
        </ul>
        <hr />
      </ul>
    </div>
  );
};

export default MealEntryTable;
