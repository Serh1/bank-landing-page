import React from "react";
import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div id="card">
      <div id="icon">{icon}</div>
      <div id="title">{title}</div>
      <div id="description">{description}</div>
      <a className="readMore">Read more -{">"}</a>
    </div>
  );
};

export default Card;
