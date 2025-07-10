import React from "react";
import css from "./AdditionalServices.module.css";

const AdditionalServices = () => {
  const additionalServices = [
    "Polstermöbelreinigung",
    "Küchenreinigung",
    "Unterhaltsreinigung",
    "Brandreinigung",
    "Fensterreinigung",
    "Teppichreinigung",
    "Renovierungsreinigung",
    "Bügeln",
  ];

  return (
    <section className={css.section}>
      <h2 className={css.heading}>Zusätzliche Dienstleistungen</h2>
      <div className={css.grid}>
        {additionalServices.map((item, index) => (
          <div key={index} className={css.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalServices;
