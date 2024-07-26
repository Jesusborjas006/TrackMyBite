const date = new Date();

const DateWidget = () => {
  return (
    <div className="border-2 border-black py-2 px-6 rounded-xl text-center relative -z-10">
      <p className="font-bold text-lg">{date.getDate()}</p>
      <p className=" text-gray-600 text-lg">
        {new Date().toLocaleDateString("en-us", { weekday: "short" })}
      </p>
      <p className="bg-black text-white absolute inset-x-0 rounded-full p-1 text-sm font-semibold w-[80%] mx-auto">
        Today
      </p>
    </div>
  );
};

export default DateWidget;
