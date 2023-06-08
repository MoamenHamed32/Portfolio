/* eslint-disable no-unused-vars */
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="info">
        <p>I&apos;m</p>
        <h2>Moamen Hamed</h2>
        <h3>Front-End Developer</h3>
        <button className="cv">
          <a href="MoamenHamedCv.pdf" download="Moamen_HamedC.V.pdf">
            Download Resume &nbsp;&nbsp;{" "}
            <i className="fa-solid fa-download"></i>
          </a>
        </button>
      </div>
    </section>
  );
}
