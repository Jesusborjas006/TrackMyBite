function App() {
  return (
    <>
      <h1>Track My Bite</h1>
      <form>
        <label htmlFor="food">Food: </label>
        <input id="food" type="text" />
        <label htmlFor="quantity">Quanity: </label>
        <select id="quantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <label htmlFor="calories">Calories: </label>
        <input id="calories" type="text" />
      </form>
    </>
  );
}

export default App;
