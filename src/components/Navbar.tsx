import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

interface NavbarProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ user, setUser }: NavbarProps) => {
  const navigate = useNavigate();

  const logUserOut = () => {
    setUser("");
    navigate("/");
  };

  return (
    <nav className="border flex justify-around items-center bg-white py-3">
      <Logo />
      <div className="flex gap-x-6 text-lg font-semibold">
        <p>
          Welcome, <span className="capitalize text-green-500">{user}</span>
        </p>
        <Link to={`/profile/${user}`}>Profile</Link>
        <button className="text-green-500" onClick={logUserOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
