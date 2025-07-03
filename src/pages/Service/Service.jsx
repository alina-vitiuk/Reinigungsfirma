import React from "react";
import css from "./Service.module.css";
import servicesData from "../../data/servicesData";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Service = () => {
  return (
    <section className={css.services}>
      <h1>Unsere Leistungen</h1>
      <p>
        Wir bieten zuverlässige Reinigungsdienste für Privat- und
        Geschäftskunden:
      </p>
      <div className={css.grid}>
        {servicesData.map((leistung, index) => (
          <ServiceCard
            key={index}
            title={leistung.title}
            description={leistung.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
