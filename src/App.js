function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="waffle" />
      <Food fav="cake" />
      <Food fav="ramen" />
    </div>
  );
}

export default App;
