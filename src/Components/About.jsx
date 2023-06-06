/* eslint-disable no-unused-vars */
import React from "react";

export default function About() {
  return (
    <div id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="infos">
        <div className="info">
          <i className="fa-solid fa-user"></i>
          <h3>Summary</h3>
          <p>
            Front-End Web Developer with High Vision and Forward-Thinking.
            Innovative use of Technology, Effective Problem Solving Skills,
            Outstanding Interpersonal Skills with ability to work independently
            as well as Within a team environment
          </p>
        </div>
        <div className="info">
          <i className="fa-solid fa-address-card"></i>
          <h3>Personal Data</h3>
          <br />

          <p>
            <span className="data">Date of birth:</span> &nbsp; 03-10-1998{" "}
            <br /> <br />
            <span className="data">Marital status:</span>&nbsp; Married <br />{" "}
            <br />
            <span className="data"> Nationality:</span>&nbsp; Egyptian
          </p>
        </div>
        <div className="info">
          <i className="fa-solid fa-hashtag"></i>
          <h3>Social Accounts</h3>
          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://github.com/MoamenHamed32"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/moamen-hamed-538874259/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:moamen.hamed33322@gmail.com"
                  target="_blanl"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-google"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/moamen.hamed.32/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
