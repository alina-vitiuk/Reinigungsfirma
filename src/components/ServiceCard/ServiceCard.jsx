import React from "react";
import css from "./ServiceCard.module.css";

const ServiceCard = ({ title, description }) => {
  return (
    <div className={css.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
