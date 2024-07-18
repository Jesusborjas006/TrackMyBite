import { Link } from "react-router-dom";

interface ProfileProps {
  user: string;
  userInfo: {
    user: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
}

const Profile = ({ user, userInfo }: ProfileProps) => {
  const { age, weight, height, activityLevel } = userInfo;
  return (
    <section>
      <h3>{user} profile</h3>
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
