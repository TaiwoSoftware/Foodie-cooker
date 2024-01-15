import React, { useEffect, useState } from "react";
import searchIcon from "../images/searchIcon.svg";

const Food = () => {
  const api_key = "e1b6f5720747d4ef6c891759a5f5d0fa";
  const api_id = "5c336466";
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${value}&app_id=${api_id}&app_key=${api_key}`
      );
      const result = await response.json();
      console.log(result);
      setRecipes(result.hits); // 
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (value) {
      fetchData();
    }
  }, [value]);

  return (
    <div className="food">
      <div className="fooder">
        <h1>Search The recipe of your food</h1>
        <img src={searchIcon} onClick={fetchData} alt="searcher" />
      </div>

      <input
        type="search"
        id="search"
        placeholder="search recipe..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="recipes-grid">
        {/* Map through the recipes and render each one */}
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri} className="recipe-container">
            <h2>{recipe.recipe.label}</h2>
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              className="recipe-image"
            />
            {/* <p>{recipe.recipe.ingredientLines}</p> */}
            <div className="ingredients">
              <div className="ingredients-descriptions">
              </div>
            </div>
            {/* <p>{recipe.recipe.ingredientLines}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
