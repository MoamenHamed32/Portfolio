/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Project(props) {
  console.log(props);
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="prj">
      <img src={props.img} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </a>
  );
}
