import React, { useState } from "react";
import css from "./OptionalServices.module.css";
import services from "./optionalServicesData.js";

import { FaBroomBall } from "react-icons/fa6";
import {
  FaCouch,
  FaWindowMaximize,
  FaSoap,
  FaTshirt,
  FaRecycle,
  FaPaintRoller,
  FaFire,
} from "react-icons/fa";

const OptionalServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const iconMap = {
    FaCouch: <FaCouch />,
    FaBroomBall: <FaBroomBall />,
    FaWindowMaximize: <FaWindowMaximize />,
    FaSoap: <FaSoap />,
    FaTshirt: <FaTshirt />,
    FaRecycle: <FaRecycle />,
    FaPaintRoller: <FaPaintRoller />,
    FaFire: <FaFire />,
  };

  return (
    <section className={css.section}>
      <h1 className={css.heading}>Zusatzleistungen</h1>
      <p className={css.intro}>
        Sie können jede Dienstleistung bei uns bestellen:
      </p>

      <div className={css.grid}>
        {services.map((item, i) => (
          <div
            className={`${css.card} ${activeIndex === i ? css.active : ""}`}
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <span className={css.icon}>{iconMap[item.icon]}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className={css.detailSection}>
        <h2>Was genau bieten wir Ihnen?</h2>
        <h3>{services[activeIndex].title}</h3>
        <p>{services[activeIndex].subtitle}</p>

        {services[activeIndex].blocks.map((block, i) => (
          <div className={css.block} key={i}>
            {block.heading && <h4>{block.heading}</h4>}
            {block.content && <p>{block.content}</p>}
            {block.list && (
              <ul>
                {block.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptionalServices;
