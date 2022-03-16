import "./navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="short__navbar">
      <div className="short__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="navbar" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
