import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./Components/MealInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:mealid" element={<MealInfo />}></Route>
    </Routes>
  );
}

export default App;
