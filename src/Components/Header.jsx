/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function Header(props) {
  return (
    <header>
      <h2 className="logo">Moamen Hamed</h2>
      <div className="left">
        <div className="left-sec">
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
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="toggle-bar" onClick={props.dropdownOpen}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="dark-mode-toggle" onClick={props.darkMode}>
          <div className="toggle-btn"></div>
        </div>
      </div>

      <div className="dropdown-menu">
        <ul>
          <li>
            <a href="#" onClick={props.dropdownOpen}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.dropdownOpen}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={props.dropdownOpen}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.dropdownOpen}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.dropdownOpen}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
