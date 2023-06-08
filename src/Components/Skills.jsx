/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
export default function Skills(props) {
  const [dark, setDark] = useState();
  useEffect(() => {
    props.dark === true ? setDark(true) : setDark(false);
  }, [props.dark]);

  return (
    <div id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-div">
        <ul>
          <div className="row row-1">
            <li>
              <i className="fa-brands fa-html5"></i>
              <h3>HTML5</h3>
            </li>
          </div>
          <div className="row row-2">
            <li>
              <i className="fa-brands fa-css3-alt"></i>
              <h3>CSS3</h3>
            </li>
            <li>
              <i className="fa-brands fa-square-js"></i>
              <h3>JavaScript</h3>
            </li>
          </div>
          <div className="row row-3">
            <li>
              <i className="fa-brands fa-react"></i>
              <h3>React.Js</h3>
            </li>
            <li>
              <i className="fa-brands fa-bootstrap"></i>
              <h3>Bootstrap</h3>
            </li>
            <li>
              <i className="fa-brands fa-node-js"></i>
              <h3>Node.Js</h3>
            </li>
          </div>
          <div className="row row-4">
            <li>
              <i className="fa-brands fa-git-alt"></i>
              <h3>Git</h3>
            </li>
            <li>
              <i className="fa-brands fa-github"></i>
              <h3>GitHub</h3>
            </li>
            <li>
              {dark === true && <img src="imgs/jquery-icon-png-24.jpg"></img>}
              {dark === false && <img src="imgs/jquery-icon-dark.png"></img>}
              <h3>JQuery</h3>
            </li>
            <li>
              {dark === true ? (
                <img src="imgs/tailwind.png"></img>
              ) : (
                <img src="imgs/tailwind-dark.png"></img>
              )}
              <h3>Tailwind</h3>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
