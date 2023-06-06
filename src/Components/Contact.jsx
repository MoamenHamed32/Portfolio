/* eslint-disable no-unused-vars */
import React from "react";

export default function Contact() {
  return (
    <footer id="contact">
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="contact-me">
        <div className="data">
          <h2>&copy; Moamen Hamed</h2>
        </div>
        <div className="info">
          <p>
            <i className="fa-solid fa-phone"></i>+201286509058
          </p>

          <p>
            <i className="fa-brands fa-google"></i>moamen.hamed33322@gmail.com
          </p>
        </div>
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
                target="_blank"
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
    </footer>
  );
}
