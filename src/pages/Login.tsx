const Login = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center border h-screen">
      <h2 className="text-4xl font-bold mb-4">What's your name?</h2>
      <form>
        <label>Name: </label>
        <input className="border border-black " type="text" />
      </form>
    </section>
  );
};

export default Login;
