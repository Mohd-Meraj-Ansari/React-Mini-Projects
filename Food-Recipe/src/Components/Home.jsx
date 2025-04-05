import React, { useState } from "react";
import "./Home.css";
import MealCard from "./MealCard";

const Home = () => {
  const [mealData, setMealData] = useState();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getData = async () => {

    if (input == "") {
      setMessage("Enter Something to Search");
    } else {
      setMessage("");
      const getUrlData = await fetch(URL);
      const data = await getUrlData.json();
      setMealData(data.meals);
    }
  };

  return (
    <div className="container">
      <h1>Food Recipe </h1>
      <div className="searchBar">
        <input
          type="text"
          id=""
          placeholder="Enter Dish"
          onChange={handleInput}
        />
        <button onClick={getData}>Search</button>
      </div>

      <div className="error">{message}</div>

      <div>
        <MealCard details={mealData} />
      </div>
    </div>
  );
};

export default Home;
