import { useState } from "react";

interface ProfileProps {
  user: string;
}

const Profile = ({ user }: ProfileProps) => {
  const [userInfo, setUserInfo] = useState({
    user: user,
    age: "",
    weight: "",
    height: "",
    activityLevel: "",
  });

  const { age, weight, height, activityLevel } = userInfo;

  console.log(userInfo);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h3>{user} profile</h3>
      <ul>
        <li>Age: {age}</li>
        <li>Weight: {weight} </li>
        <li>Height: {height}</li>
        <li>Activity Level: {activityLevel}</li>
      </ul>

      <form className=" mx-auto border flex flex-col gap-y-4">
        <div className="flex ">
          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
          />
        </div>

        <div className="flex ">
          <label>Weight: </label>
          <input
            type="text"
            name="weight"
            value={userInfo.weight}
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <label>Height: </label>
          <input
            type="text"
            name="height"
            value={userInfo.height}
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <label>Activity Level: </label>
          <input
            type="text"
            name="activityLevel"
            value={userInfo.activityLevel}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Profile;
