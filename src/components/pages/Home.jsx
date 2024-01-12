import React from "react";
import cooker from "../images/Cooking-rafiki.svg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/food");
  };
  return (
    <div className="home">
      <div className="homeer">
        <div className="texter">
          <h1>Get the secret</h1>
          <p>
            Get the recipe to all food and have access{" "}
            <span>to all food and start cooking</span>{" "}
          </p>
          <p>
            <button onClick={handleClick} className="get">
              Get started
            </button>
          </p>
        </div>
        <div className="image">
          <img src={cooker} alt="main cook" />
        </div>
      </div>
    </div>
  );
};

export default Home;
