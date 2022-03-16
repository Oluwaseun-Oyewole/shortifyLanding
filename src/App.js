import { Navbar } from "./components";
import { Hero } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
