/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  const [dark, setDark] = useState(true);
  const [hero, setHero] = useState();
  const [header, setHeader] = useState();
  const [darkModeBtn, setDarkModeBtn] = useState();
  const [toggleBar, setToggleBar] = useState();
  const [dropdownMenu, setDropdownMenu] = useState();
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();
  const [contact, setContact] = useState();
  useEffect(() => {
    setHeader(document.querySelector("header"));
    setDarkModeBtn(document.querySelector(".toggle-btn"));
    setDropdownMenu(document.querySelector(".dropdown-menu"));
    setToggleBar(document.querySelector(".toggle-bar i"));
    setHero(document.querySelector(".hero"));
    setAbout(document.querySelector(".about"));
    setSkills(document.querySelector("#skills"));
    setProjects(document.querySelector("#projects"));
    setContact(document.querySelector("#contact"));
  }, []);

  function darkMode() {
    darkModeBtn.classList.toggle("dark-off");
    header.classList.toggle("light-header");
    hero.classList.toggle("light-hero");
    about.classList.toggle("light-about");
    skills.classList.toggle("light-skills");
    projects.classList.toggle("light-projects");
    contact.classList.toggle("light-contact");

    document.body.style.backgroundColor == "white"
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "white");
    setDark((prev) => !prev);
  }
  function dropdownOpen() {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");
    toggleBar.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  }

  return (
    <div className="app-container">
      <Header darkMode={darkMode} dropdownOpen={dropdownOpen} />
      <Hero />
      <About />
      <Skills dark={dark} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
