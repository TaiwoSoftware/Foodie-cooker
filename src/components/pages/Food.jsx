import React, { useEffect, useState } from "react";
import searchIcon from "../images/searchIcon.svg";

const Food = () => {
  const api_key = "e1b6f5720747d4ef6c891759a5f5d0fa";
  const api_id = "5c336466";
  const [value, setValue] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${value}&app_id=${api_id}&app_key=${api_key}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  

  useEffect(() => {
    if(value) {
        fetchData()
    }
  },[value]);


  return (
    <div className="food">
      <h1>Search The recipe of your food</h1>
      <img src={searchIcon} onClick={fetchData} alt="searcher" />

      <input
        type="search"
        id="search"
        placeholder="search recipe..."
        value={value}
        onChange={(e) => setValue(e.target.value)}

      />
    </div>
  );
};

export default Food;
