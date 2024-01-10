import React, { useState } from "react";
import searchIcon from '../images/searchIcon.svg'

const Food = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
  return (
    <div className="food">
      <h1>Search The recipe of your food</h1>
      <img src={searchIcon} alt="searcher" />

      <input type="search" id="search" placeholder="search recipe..." 
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Food;
