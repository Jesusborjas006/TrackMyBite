import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";

interface NavbarProps {
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

const Navbar = ({ userInfo, setUserInfo }: NavbarProps) => {
  const navigate = useNavigate();

  const logUserOut = () => {
    setUserInfo({
      user: "",
      age: "",
      weight: "",
      height: "",
      activityLevel: "",
    });
    navigate("/");
  };

  let navbarContent;

  if (userInfo.user) {
    navbarContent = (
      <>
        <Logo size={3} />
        <div className="flex gap-x-6 text-lg font-semibold">
          <p>
            Welcome,{" "}
            <span className="capitalize text-green-500">{userInfo.user}</span>
          </p>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={`/profile/${userInfo.user}`}
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Profile
          </NavLink>
          <button onClick={logUserOut}>Logout</button>
        </div>
      </>
    );
  } else {
    navbarContent = <Logo size={3} />;
  }

  return (
    <nav className="border flex justify-around items-center bg-white py-3">
      {navbarContent}
    </nav>
  );
};

export default Navbar;
