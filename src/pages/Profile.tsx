interface ProfileProps {
  user: string;
}

const Profile = ({ user }: ProfileProps) => {
  return <section>{user}</section>;
};

export default Profile;
