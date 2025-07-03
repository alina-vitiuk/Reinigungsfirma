import React from "react";
import css from "./Services.module.css";

import Büros from "../../Images/Büros.png";
import Treppenhäuser from "../../Images/Treppenhäuser.png";
import Einkaufsbereiche from "../../Images/Einkaufsbereiche.png";
import Industriebauten from "../../Images/Industriebauten.png";
import Schulen from "../../Images/Schulen.png";
import Hotels from "../../Images/Hotels.png";
import Cafés from "../../Images/Cafés.png";
import Sporthallen from "../../Images/Sporthallen.png";

import Wohnung from "../../Images/Wohnung.png";
import Haus from "../../Images/Haus.png";
import Renovierung from "../../Images/Renovierung.png";
import Feierlichkeiten from "../../Images/Feierlichkeiten.png";
import Umzug from "../../Images/Umzug.png";
import Balkon from "../../Images/Balkon.png";
import Wohnungsverkauf from "../../Images/Wohnungsverkauf.png";
import PrTreppenhäuser from "../../Images/PrTreppenhäuser.png";

const services = [
  {
    title: "Büros",
    price: "ab 26€",
    image: Büros,
  },
  {
    title: "Treppenhäuser",
    price: "ab 28€",
    image: Treppenhäuser,
  },
  {
    title: "Einkaufsbereiche",
    price: "ab 28€",
    image: Einkaufsbereiche,
  },
  {
    title: "Industriebauten",
    price: "ab 30€",
    image: Industriebauten,
  },
  {
    title: "Schulen & Kitas",
    price: "ab 28€",
    image: Schulen,
  },
  {
    title: "Hotels",
    price: "ab 25€",
    image: Hotels,
  },
  {
    title: "Cafés & Restaurants",
    price: "ab 28€",
    image: Cafés,
  },
  {
    title: "Sporthallen",
    price: "ab 27€",
    image: Sporthallen,
  },
];

const privatServices = [
  { title: "Wohnung", price: "ab 24€", image: Wohnung },
  { title: "Haus", price: "ab 24€", image: Haus },
  { title: "Nach Renovierung", price: "ab 32€", image: Renovierung },
  { title: "Nach Feierlichkeiten", price: "ab 26€", image: Feierlichkeiten },
  { title: "Beim Umzug", price: "ab 26€", image: Umzug },
  { title: "Terrasse, Balkon & Garage", price: "ab 26€", image: Balkon },
  {
    title: "Wohnungsverkauf (Vorbereitung)",
    price: "ab 24€",
    image: Wohnungsverkauf,
  },
  { title: "Treppenhaus", price: "ab 28€", image: PrTreppenhäuser },
];

const ServiceGrid = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h2 className={css.heading}>
          Unsere Reinigungsleistungen für Unternehmen und Organisationen
        </h2>
        <div className={css.grid}>
          {services.map((service, index) => (
            <div key={index} className={css.card}>
              <img
                src={service.image}
                alt={service.title}
                className={css.image}
              />
              <div className={css.overlay}>
                <h3 className={css.title}>{service.title}</h3>
                <p className={css.price}>{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={css.wrapper}>
        <h2 className={css.heading}>
          Unsere Reinigungsleistungen für Privatkunden
        </h2>
        <div className={css.grid}>
          {privatServices.map((service, index) => (
            <div key={index} className={css.card}>
              <img
                src={service.image}
                alt={service.title}
                className={css.image}
              />
              <div className={css.overlay}>
                <h3 className={css.title}>{service.title}</h3>
                <p className={css.price}>{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
