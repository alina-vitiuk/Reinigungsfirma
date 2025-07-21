import React from "react";
import css from "./ServiceTypes.module.css";
import {
  FaBroom,
  FaPumpSoap,
  FaTools,
  FaHome,
  FaPaintRoller,
  FaTruckMoving,
  FaCalendarAlt,
  FaClock,
  FaRegCalendarCheck,
  FaCalendarDay,
} from "react-icons/fa";

const leistungenKategorien = [
  { text: "Regelmäßige Reinigung", icon: <FaBroom /> },
  { text: "Grundreinigung", icon: <FaPumpSoap /> },
  { text: "Allgemeine Reinigung", icon: <FaTools /> },
  { text: "Spezielle Reinigung", icon: <FaHome /> },
  { text: "Reinigung nach Renovierung", icon: <FaPaintRoller /> },
  { text: "Reinigung nach einem Umzug", icon: <FaTruckMoving /> },
];

const zeiten = [
  { text: "Täglich/Wöchentlich/Monatlich", icon: <FaCalendarAlt /> },
  { text: "Dringende Reinigung", icon: <FaClock /> },
  { text: "Wochenend- und Feiertagsreinigung", icon: <FaRegCalendarCheck /> },
  { text: "Morgen-/Abendreinigung", icon: <FaCalendarDay /> },
];

const cleaningTypes = [
  {
    icon: <FaBroom />,
    title: "Regelmäßige Reinigung",
    image: "regelmaessig.jpg",
    description:
      "Regelmäßige Reinigung ist die Grundlage für ein angenehmes und sauberes Zimmer. Dazu gehört die Trocken- und Nassreinigung bestimmter Flächen, Müll entfernen, Geschirr abwaschen und Ordnung schaffen.",
    highlight: "Empfohlen: 1–3 Mal pro Woche",
    list: [
      "Keine Reinigung von Möbeln/Geräten von innen",
      "Kein Entfernen von Schmutz an schwer zugänglichen Stellen",
      "Keine Teppich-/Polstertrockenreinigung",
    ],
  },
  {
    icon: <FaPumpSoap />,
    title: "Grundreinigung",
    image: "grundreinigung.jpg",
    description:
      "Für ein angenehmes und sicheres Raumklima. Umfasst Außenflächen, Müllabfuhr, Geschirrspülen, Ordnung schaffen.",
    highlight: "Empfohlen: 1–2 Mal pro Monat",
    list: [
      "Keine Innenreinigung von Möbeln/Geräten",
      "Keine Tiefenreinigung von Teppichen/Polstern",
    ],
  },
  {
    icon: <FaTools />,
    title: "Allgemeine Reinigung",
    image: "allgemein.jpg",
    description: "Umfassende Reinigung innen und außen.",
    highlight: "Empfohlen 2–4 Mal pro Jahr",
    list: [
      "Wände/Decken reinigen (trocken/nass)",
      "Lampen, Fenster, Spiegel, Fliesen, Türen waschen",
      "Entfernung von Schimmel, Kalk, Rost",
      "Küchen- und Badezimmer-Tiefenreinigung",
      "Klebereste und starke Verschmutzungen beseitigen",
    ],
  },
  {
    icon: <FaHome />,
    title: "Spezielle Reinigung",
    image: "spezial.jpg",
    description:
      "Reinigung einzelner Räume/Bereiche wie Küche, Bad, Schränke, Treppen usw.",
    highlight: "Empfohlen: nach Bedarf",
    list: [
      "Gründliche Reinigung schwer zugänglicher Stellen",
      "Individuelle Bereiche nach Kundenwunsch",
      "Einsatz spezieller Mittel bei Bedarf (z. B. Desinfektion)",
    ],
  },
  {
    icon: <FaPaintRoller />,
    title: "Reinigung nach Renovierung",
    image: "renovierung.jpg",
    description:
      "Entfernt Baustaub, Klebereste, Farbspritzer usw. Durchführung nach Besichtigung – durch Vorarbeiter und Team.",
    highlight: "Empfohlen: nach Renovierungsarbeiten – nach Vor-Ort-Begehung",
    list: [
      "Staubentfernung von allen Flächen",
      "Glas-/Spiegelflächen, Fliesenfugen, Möbel, Böden",
      "Entsorgung großer Mengen Müll",
    ],
  },
  {
    icon: <FaTruckMoving />,
    title: "Reinigung nach einem Umzug",
    image: "umzug.jpg",
    description: "Die Liste hängt vom Verschmutzungsgrad ab, aber umfasst oft:",
    highlight: "Empfohlen: direkt nach dem Umzug oder nach Bedarf",
    list: [
      "Küchenreinigung inkl. Möbel, Dunstabzug",
      "Desinfektion Bad, Fenster, Teppiche, Beleuchtung",
      "Müllentsorgung, Reinigung von Loggien, Böden usw.",
    ],
  },
];

const ServiceTypes = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Art der Leistung</h1>

      <div className={css.grid}>
        {leistungenKategorien.map((item, i) => (
          <div key={i} className={css.card}>
            <span className={css.icon}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      <p className={css.subheading}>
        Sie können unsere Dienste an verschiedenen Tagen und zu verschiedenen
        Zeiten nutzen:
      </p>

      <div className={css.timeGrid}>
        {zeiten.map((item, i) => (
          <div key={i} className={css.card}>
            <span className={css.icon}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      <div className={css.textBlock}>
        {cleaningTypes.map((item, i) => (
          <div
            key={i}
            className={`${css.item} ${i % 2 === 0 ? css.rowReverse : ""}`}
          >
            <div className={css.text}>
              <h2>
                {item.icon} {item.title}
              </h2>
              <p>{item.description}</p>
              {item.highlight && (
                <p className={css.highlight}>{item.highlight}</p>
              )}
              {item.list && (
                <ul>
                  {item.list.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className={css.imageBox}>
              <img
                src={
                  new URL(`../../assets/images/${item.image}`, import.meta.url)
                    .href
                }
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
