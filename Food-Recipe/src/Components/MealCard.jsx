import { useState } from "react";
import React from "react";
import "./MealCard.css";
import { NavLink } from "react-router-dom";

const MealCard = ({ details }) => {
  const [message, setMessage] = useState("");
  return (
    <div className="meal-container">
      {!details
        ? ""
        : details.map((item) => {
            return (
              <div className="meal-card">
                <img src={item.strMealThumb} alt="meal image" />
                <div className="meal-info">
                  <p>{item.strMeal}</p>
                  <NavLink to={`/${item.idMeal}`}>
                    <button> Recipe </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MealCard;
