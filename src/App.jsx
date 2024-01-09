import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./components/images/remover.png";
import searchIcon from "./components/images/searchIcon.svg";
import "./styles.css";
import About from "./components/pages/About";
import Food from "./components/pages/Food";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <div className="allLogo">
              <img src={logo} alt="main logo" />
              <Link to='/'>
                <h2>Recipe</h2>
              </Link>
            </div>
            <div className="links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/food">
                <li>Recipe</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </div>
            <div className="buttons">
              <input type="search" placeholder="search food..." />
              <img src={searchIcon} alt="search" />
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
          <Route path="/food" element={<Food />} />{" "}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
