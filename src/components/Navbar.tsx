import Logo from "./Logo";

interface NavbarProps {
  user: string;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="border flex justify-around items-center bg-white py-3">
      <Logo />
      <p className="text-lg font-semibold">
        Welcome, <span className="capitalize text-green-500">{user}</span>
      </p>
    </nav>
  );
};

export default Navbar;
