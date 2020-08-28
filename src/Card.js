import React from "react";
import "./Cards.css";

function Card({ title, type, date, time }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}

export default Card;
