import React, { useState } from "react";
import css from "./Service.module.css";
import servicesData from "../../data/serviceListData";

const categories = {
  business: "Für Geschäftskunden",
  privat: "Für Privatkunden",
};

const ServicePage = () => {
  const [activeIndexes, setActiveIndexes] = useState({
    business: null,
    privat: null,
  });

  const handleClick = (category, index) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <section className={css.section}>
      <h1>Unsere Leistungen</h1>
      <p>Wählen Sie eine Reinigungsdienstleistung aus:</p>

      {Object.entries(categories).map(([categoryKey, categoryLabel]) => {
        const categoryServices = servicesData.filter(
          (s) => s.category === categoryKey
        );

        return (
          <div key={categoryKey} className={css.categoryBlock}>
            <h2 className={css.categoryTitle}>{categoryLabel}</h2>
            <div className={css.grid}>
              {categoryServices.map((service, i) => (
                <div
                  key={i}
                  className={`${css.card} ${
                    activeIndexes[categoryKey] === i ? css.activeCard : ""
                  }`}
                  onClick={() => handleClick(categoryKey, i)}
                >
                  <img
                    src={
                      new URL(
                        `../../assets/images/${service.image}`,
                        import.meta.url
                      ).href
                    }
                    alt={service.title}
                    className={css.image}
                  />
                  <h3>{service.title}</h3>
                  <p className={css.price}>{service.price}</p>
                </div>
              ))}
            </div>

            {/* Опис для активної послуги цієї категорії */}
            {activeIndexes[categoryKey] !== null && (
              <div className={css.descriptionBox}>
                <h2>{categoryServices[activeIndexes[categoryKey]].title}</h2>
                {categoryServices[activeIndexes[categoryKey]].blocks.map(
                  (block, i) => (
                    <div key={i}>
                      {block.heading && <h3>{block.heading}</h3>}
                      {block.content && <p>{block.content}</p>}
                      {block.list && (
                        <ul>
                          {block.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ServicePage;
