interface LogoProps {
  size: number;
}

const Logo = ({ size }: LogoProps) => {
  return (
    <h1 className={`text-${size}xl font-bold text-green-500 `}>
      Track My Bite
    </h1>
  );
};

export default Logo;
