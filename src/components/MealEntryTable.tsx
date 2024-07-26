interface MealEntryTableProps {
  setMealType: React.Dispatch<React.SetStateAction<string>>;
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}

const MealEntryTable = ({
  setMealType,
  setIsModalDisplayed,
}: MealEntryTableProps) => {
  return (
    <div className="shadow-md rounded-xl bg-white w-[300px] mx-auto mt-10">
      <ul className="py-4 px-6 space-y-4">
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
        <hr />
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
        <hr />
      </ul>
    </div>
  );
};

export default MealEntryTable;
