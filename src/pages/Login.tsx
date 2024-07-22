import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

interface LoginProps {
  userInfo: {
    user: string;
    calorieGoal: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      user: string;
      calorieGoal: string;
      age: string;
      weight: string;
      height: string;
      activityLevel: string;
    }>
  >;
}

const Login = ({ userInfo, setUserInfo }: LoginProps) => {
  const navigate = useNavigate();

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (userInfo.user && userInfo.calorieGoal) {
      navigate("/home");
    }
    return;
  };

  return (
    <section className="text-center flex flex-col justify-center items-center border h-screen">
      <Logo size={5} />
      <h2 className="text-3xl font-bold pt-10 mb-4">
        Please add your name and calorie goal?
      </h2>
      <form className="mt-5">
        <div className="bg-white p-8 shadow-md rounded-xl flex flex-col justify-start items-start gap-y-1">
          <label>Name: </label>
          <input
            className="border border-black pl-1 "
            type="text"
            value={userInfo.user}
            onChange={(e) => {
              setUserInfo({ ...userInfo, user: e.target.value });
            }}
          />
          <label className="mt-2">Calorie Goal: </label>
          <input
            className="border border-black pl-1"
            type="number"
            value={userInfo.calorieGoal}
            placeholder="Enter numbers only"
            onChange={(e) => {
              setUserInfo({ ...userInfo, calorieGoal: e.target.value });
            }}
          />
          <button
            className={`border  px-2 border-black mt-5 ${
              userInfo.user && userInfo.calorieGoal
                ? "cursor-pointer bg-black text-white hover:bg-green-900 active:bg-green-300"
                : "bg-[#ccc] text-[#666] cursor-not-allowed"
            }`}
            onClick={handleLogIn}
            disabled={!userInfo.user && !userInfo.calorieGoal}
          >
            Log In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
