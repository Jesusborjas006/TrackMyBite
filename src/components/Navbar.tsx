import Logo from "./Logo";

interface NavbarProps {
  user: string;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav>
      <Logo />
      <p>
        Welcome, <span className="capitalize">{user}</span>
      </p>
    </nav>
  );
};

export default Navbar;
