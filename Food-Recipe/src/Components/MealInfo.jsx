import React, { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "./mealInfo.css";

const MealInfo = () => {
  const { mealid } = useParams();
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;

  const getMealData = async () => {
    const data = await fetch(URL);
    const jsonData = await data.json();
    setItem(jsonData.meals[0]);
  };

  if (item != "") {
    getMealData();
  }
  return (
    <div>
      {!item ? (
        "Data not found"
      ) : (
        <div className="back">
          <div className="item-Container">
            <div className="left">
              <img src={item.strMealThumb} alt="Meal image" />
            </div>
            <div className="right">
              <h1>{item.strMeal}</h1>
              <h3>Category : {item.strCategory}</h3>
              <h3>Area : {item.strArea}</h3>
              <h3>Tags : {item.strTags}</h3>
              <h3>Instructions : </h3>
              <div className="scrollbar">
                <p>{item.strInstructions}</p>
              </div>
              <h3>Ingredient:</h3>
              <div className="item-ingredients scrollbar">
                <p>{item.strIngredient1}</p>
                <p>{item.strIngredient2}</p>
                <p>{item.strIngredient3}</p>
                <p>{item.strIngredient4}</p>
                <p>{item.strIngredient5}</p>
                <p>{item.strIngredient6}</p>
                <p>{item.strIngredient7}</p>
                <p>{item.strIngredient8}</p>
                <p>{item.strIngredient9}</p>
                <p>{item.strIngredient10}</p>
                <p>{item.strIngredient11}</p>
                <p>{item.strIngredient12}</p>
                <p>{item.strIngredient13}</p>
                <p>{item.strIngredient14}</p>
                <p>{item.strIngredient15}</p>
                <p>{item.strIngredient16}</p>
                <p>{item.strIngredient17}</p>
                <p>{item.strIngredient18}</p>
                <p>{item.strIngredient19}</p>
                <p>{item.strIngredient20}</p>
              </div>
            </div>
          </div>
          <button className="back-button" onClick={() => navigate(-1)}>
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default MealInfo;
