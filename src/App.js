import "./App.css";
import Hero from "./components/Hero.js";
import MyMap from "./components/Map";
import Details from "./components/Details";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <Details />
        <MyMap />
      </div>
    </>
  );
}

export default App;
