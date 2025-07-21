import React, { useState } from "react";
import css from "./Service.module.css";
import servicesData from "../../data/serviceListData";
import { useIsMobile } from "../../hooks/useIsMobile";
import MobileView from "./MobileView/MobileView";

const categories = {
  business: "Für Geschäftskunden und Behörden",
  privat: "Für Privatkunden",
};

const ServicePage = () => {
  const [activeService, setActiveService] = useState(null);

  const groupedServices = Object.entries(categories).map(
    ([categoryKey, categoryLabel]) => ({
      key: categoryKey,
      label: categoryLabel,
      services: servicesData.filter((s) => s.category === categoryKey),
    })
  );

  const isMobile = useIsMobile();

  return (
    <section className={css.section}>
      <h1>Unsere Leistungen</h1>
      <p>Wählen Sie eine Reinigungsdienstleistung aus:</p>

      {isMobile ? (
        <MobileView
          servicesData={servicesData}
          activeService={activeService}
          setActiveService={setActiveService}
          groupedServices={groupedServices}
        />
      ) : (
        <>
          {!activeService ? (
            <>
              {Object.entries(categories).map(
                ([categoryKey, categoryLabel]) => {
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
                            className={css.card}
                            onClick={() => setActiveService(service)}
                          >
                            <img
                              src={service.image}
                              alt={service.title}
                              className={css.image}
                            />
                            <h3>{service.title}</h3>
                            <p className={css.price}>{service.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              )}
            </>
          ) : (
            <div className={css.activeLayout}>
              <div className={css.detailBox}>
                <button
                  className={css.backButton}
                  onClick={() => setActiveService(null)}
                >
                  ← Zurück zur Übersicht
                </button>
                <h2>{activeService.title}</h2>
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className={css.detailImage}
                />
                {activeService.blocks &&
                  activeService.blocks.length > 0 &&
                  activeService.blocks.map((block, i) => (
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
                  ))}
              </div>

              <aside className={css.sidebar}>
                {groupedServices.map((group) => (
                  <div key={group.key} className={css.sidebarGroup}>
                    <h3>{group.label}</h3>
                    <ul>
                      {group.services.map((service, i) => (
                        <li
                          key={i}
                          className={`${css.linkItem} ${
                            activeService.title === service.title
                              ? css.activeLink
                              : ""
                          }`}
                          onClick={() => setActiveService(service)}
                        >
                          {service.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <button className={css.orderButton}>Reinigung bestellen</button>
              </aside>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ServicePage;
