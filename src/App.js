import { Navbar, Form, Footer, Feature } from "./components";
import { Hero, Cta } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Form />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default App;

// <Navbar />
// <Hero />
// <Form />
// <Cta />
// <Footer />
