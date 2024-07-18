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
    <section className="flex justify-center relative">
      <h3 className="absolute text-xl top-10">
        <span className="capitalize">{userInfo.user}'s</span> profile
      </h3>
      <div className="bg-white p-10 min-w-[300px] mt-32 flex flex-col items-center shadow-md rounded-xl">
        <div className="w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center mb-8">
          <p className="text-red-500 capitalize text-5xl">
            {userInfo.user.split("")[0]}
          </p>
        </div>
        <ul className="space-y-1">
          <li>Age: {age}</li>
          <li>Weight: {weight} lbs</li>
          <li>Height: {height} ft</li>
          <li>Activity Level: {activityLevel}</li>
        </ul>
        <Link
          className="bg-green-400 hover:bg-green-500 py-2 px-3 rounded-sm inline-block mt-4"
          to="/edit/user"
        >
          Edit Profile
        </Link>
      </div>
    </section>
  );
};

export default Profile;
