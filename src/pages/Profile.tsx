import { Link } from "react-router-dom";

interface ProfileProps {
  userInfo: {
    user: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
}

const Profile = ({ userInfo }: ProfileProps) => {
  const { age, weight, height, activityLevel } = userInfo;
  return (
    <section className="border ">
      <h3>
        <span className="capitalize">{userInfo.user}'s</span> profile
      </h3>
      <div className="w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center">
        <p className="text-red-500 capitalize text-5xl">
          {userInfo.user.split("")[0]}
        </p>
      </div>
      <ul>
        <li>Age: {age}</li>
        <li>Weight: {weight} </li>
        <li>Height: {height}</li>
        <li>Activity Level: {activityLevel}</li>
      </ul>
      <Link to="/edit/user">Edit Profile</Link>
    </section>
  );
};

export default Profile;
