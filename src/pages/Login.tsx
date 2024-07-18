import { useNavigate } from "react-router-dom";

interface LoginProps {
  userInfo: {
    user: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      user: string;
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

    if (userInfo.user) {
      navigate("/home");
    }
  };

  return (
    <section className="text-center flex flex-col justify-center items-center border h-screen">
      <h2 className="text-4xl font-bold mb-4">What's your name?</h2>
      <form>
        <label>Name: </label>
        <input
          className="border border-black "
          type="text"
          value={userInfo.user}
          onChange={(e) => {
            setUserInfo({ ...userInfo, user: e.target.value });
          }}
        />
        <button
          className={`border ml-2 px-2 border-black ${
            userInfo.user
              ? "cursor-pointer bg-black text-white hover:bg-green-900 active:bg-green-300"
              : "bg-[#ccc] text-[#666] cursor-not-allowed"
          }`}
          onClick={handleLogIn}
          disabled={!userInfo.user}
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default Login;
