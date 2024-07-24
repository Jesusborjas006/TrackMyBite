import { useNavigate } from "react-router-dom";

interface EditProfileProps {
  userInfo: {
    user: string;
    calorieGoal: string;
    age: string;
    weight: string;
    height: string;
    activityLevel: string;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      user: string;
      calorieGoal: string;
      age: string;
      weight: string;
      height: string;
      activityLevel: string;
    }>
  >;
}

const EditProfile = ({ userInfo, setUserInfo }: EditProfileProps) => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const saveUserChanges = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <section className="flex justify-center">
      <div className="mt-20">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Edit Your Profile
        </h3>
        <form className="min-w-[320px] max-w-[500px] mx-auto border flex flex-col p-6 gap-y-4 bg-white shadow-md rounded-xl">
          <div>
            <label>Calorie Goal:</label>
            <input
              className="w-full border bg-slate-100 text-indent pl-1"
              type="text"
              name="calorieGoal"
              value={userInfo.calorieGoal}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              className="w-full border bg-slate-100 text-indent pl-1"
              type="text"
              name="age"
              value={userInfo.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Weight: </label>
            <input
              className="w-full border bg-slate-100 pl-1"
              type="text"
              name="weight"
              placeholder="lbs"
              value={userInfo.weight}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Height: </label>
            <input
              className="w-full border bg-slate-100 pl-1"
              type="text"
              placeholder="ft"
              name="height"
              value={userInfo.height}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Activity Level: </label>
            <input
              className="w-full border bg-slate-100 pl-1"
              type="text"
              name="activityLevel"
              value={userInfo.activityLevel}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-400 hover:bg-green-500 py-2 px-3 rounded-sm mt-2"
            onClick={saveUserChanges}
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
