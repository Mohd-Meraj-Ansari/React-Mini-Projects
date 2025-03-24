import React from "react";
import "./About.css";
import library from "../../images/library.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About BookCloud</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={library} alt="Library image" />
          </div>

          <div className="about-text">
            <p className="fs-17">
              A gateway to a world of knowledge, stories, and inspiration. Our
              library hosts a diverse collection of books spanning various
              genres, including fiction, non-fiction, educational resources, and
              much more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
