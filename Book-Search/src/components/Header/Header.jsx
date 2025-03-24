import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Read. Learn. Grow.</h2>
          <br />
          <p className="header-text fs-22 fw-4 text-black">
            "Explore endless stories and resources at your fingertips, anytime,
            anywhere. From timeless classics to the latest releases, our
            collection is curated for every reader. Start your journey of
            discovery and inspiration with just one click."
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
