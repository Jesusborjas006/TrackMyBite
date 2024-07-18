import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleLogIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (user) {
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
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          className={`border ml-2 px-2 border-black ${
            user
              ? "cursor-pointer bg-black text-white hover:bg-green-900 active:bg-green-300"
              : "bg-[#ccc] text-[#666] cursor-not-allowed"
          }`}
          onClick={handleLogIn}
          disabled={!user}
        >
          Log In
        </button>
      </form>
    </section>
  );
};

export default Login;
