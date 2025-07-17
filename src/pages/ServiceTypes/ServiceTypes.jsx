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

      <div className={css.grid}>
        {zeiten.map((item, i) => (
          <div key={i} className={css.card}>
            <span className={css.icon}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      <div className={css.textBlock}>
        <h2>
          <FaBroom /> Regelmäßige Reinigung
        </h2>
        <p>
          Regelmäßige Reinigung ist die Grundlage für ein angenehmes und
          sauberes Zimmer. Dazu gehört die Trocken- und Nassreinigung bestimmter
          Flächen, Müll entfernen, Geschirr abwaschen und Ordnung schaffen.
          <br />
          <strong>Empfohlen:</strong> 1–3 Mal pro Woche.
        </p>
        <ul>
          <li>Keine Reinigung von Möbeln/Geräten von innen</li>
          <li>Kein Entfernen von Schmutz an schwer zugänglichen Stellen</li>
          <li>Keine Teppich-/Polstertrockenreinigung</li>
        </ul>

        <h2>
          <FaPumpSoap /> Grundreinigung
        </h2>
        <p>
          Für ein angenehmes und sicheres Raumklima. Umfasst Außenflächen,
          Müllabfuhr, Geschirrspülen, Ordnung schaffen.
          <br />
          <strong>Empfohlen:</strong> 1–2 Mal pro Monat.
        </p>
        <ul>
          <li>Keine Innenreinigung von Möbeln/Geräten</li>
          <li>Keine Tiefenreinigung von Teppichen/Polstern</li>
        </ul>

        <h2>
          <FaTools /> Allgemeine Reinigung
        </h2>
        <p>
          Umfassende Reinigung innen und außen – empfohlen 2–4 Mal pro Jahr.
        </p>
        <ul>
          <li>Wände/Decken reinigen (trocken/nass)</li>
          <li>Lampen, Fenster, Spiegel, Fliesen, Türen waschen</li>
          <li>Entfernung von Schimmel, Kalk, Rost</li>
          <li>Küchen- und Badezimmer-Tiefenreinigung</li>
          <li>Klebereste und starke Verschmutzungen beseitigen</li>
        </ul>

        <h2>
          <FaHome /> Spezielle Reinigung
        </h2>
        <p>
          Reinigung einzelner Räume/Bereiche wie Küche, Bad, Schränke, Treppen
          usw.
        </p>

        <h2>
          <FaPaintRoller /> Reinigung nach Renovierung
        </h2>
        <p>
          Entfernt Baustaub, Klebereste, Farbspritzer usw.
          <br />
          Durchführung nach Besichtigung – durch Vorarbeiter und Team.
        </p>
        <ul>
          <li>Staubentfernung von allen Flächen</li>
          <li>Glas-/Spiegelflächen, Fliesenfugen, Möbel, Böden</li>
          <li>Entsorgung großer Mengen Müll</li>
        </ul>

        <h2>
          <FaTruckMoving /> Reinigung nach einem Umzug
        </h2>
        <p>Die Liste hängt vom Verschmutzungsgrad ab, aber umfasst oft:</p>
        <ul>
          <li>Küchenreinigung inkl. Möbel, Dunstabzug</li>
          <li>Desinfektion Bad, Fenster, Teppiche, Beleuchtung</li>
          <li>Müllentsorgung, Reinigung von Loggien, Böden usw.</li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceTypes;
