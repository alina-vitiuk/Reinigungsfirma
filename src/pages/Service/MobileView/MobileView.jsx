import React, { useState, useRef, useEffect } from "react";
import css from "./MobileView.module.css";
import { FiClipboard } from "react-icons/fi";

const MobileView = ({ servicesData, activeService, setActiveService }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (service) => {
    setSelectedService(service);
    setActiveService(service);
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 0);
  };
  const grouped = {
    "Für Geschäftskunden und Behörden": servicesData.filter(
      (s) => s.category === "business"
    ),
    "Für Privatkunden": servicesData.filter((s) => s.category === "privat"),
  };

  // Закриття при кліку поза меню
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (activeService) {
    return (
      <div className={css.detailBox}>
        <button
          className={css.backButton}
          onClick={() => {
            setActiveService(null);
            setSelectedService(null);
          }}
        >
          ← Zurück zur Auswahl
        </button>
        <div className={css.detailCard}>
          <h2>
            {" "}
            <FiClipboard /> {activeService.title}
          </h2>
          {activeService.blocks.map((block, i) => (
            <div key={i} className={css.detailBlock}>
              {block.heading && <h3>📌 {block.heading}</h3>}
              {block.content && <p>{block.content}</p>}
              {block.list && (
                <ul>
                  {block.list.map((item, idx) => (
                    <li key={idx}>
                      <strong>~</strong> {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button className={css.orderButton}>📩 Reinigung bestellen</button>
      </div>
    );
  }

  return (
    <div className={css.dropdownWrapper}>
      <label className={css.label}>Dienstleistung auswählen:</label>
      <div
        className={css.dropdown}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        ref={dropdownRef}
      >
        <div className={css.dropdownSelected}>
          {selectedService ? selectedService.title : "Bitte wählen..."}
        </div>
        <div
          className={`${css.dropdownArrow} ${isDropdownOpen ? css.open : ""}`}
        >
          ▼
        </div>
      </div>

      {isDropdownOpen && (
        <div className={css.dropdownList}>
          {Object.entries(grouped).map(([groupLabel, services]) => (
            <div key={groupLabel} className={css.group}>
              <div className={css.groupLabel}>{groupLabel}</div>
              {services.map((service, i) => (
                <div
                  key={i}
                  className={css.dropdownItem}
                  onClick={() => handleSelect(service)}
                >
                  {service.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileView;
