import { useLocation, useNavigate } from "react-router-dom";

interface EditProfileProps {
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
  user: string;
}

const EditProfile = ({ userInfo, setUserInfo, user }: EditProfileProps) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const saveUserChanges = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(`/profile/${user}`);
  };

  return (
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
      <button onClick={saveUserChanges}>Save Changes</button>
    </form>
  );
};

export default EditProfile;
