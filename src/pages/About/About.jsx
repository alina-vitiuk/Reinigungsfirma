import React from "react";
import { Link } from "react-router-dom";
import css from "./About.module.css";
import AboutUS from "../../Images/AboutUs.png";
import whyChooseUsData from "./whyChooseUsData.js";
import PartnerImage from "../../Images/partner.png";

import {
  HiOutlineViewGridAdd,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

const About = ({ jobs }) => {
  return (
    <section className={css.about}>
      <h2 className={css.title}>LIK Reinigungsservice</h2>
      <p className={css.text}>
        Likreinigungsservice wurde im Jahr 2024 von den beiden Gründern als GbR
        ins Leben gerufen. Der Hauptsitz befindet sich in Hamburg. Die
        Aktivitäten des Unternehmens erstrecken sich über das gesamte Gebiet der
        Europäischen Union. Unser Team wächst und entwickelt sich stetig weiter.
        Wir sind stets offen für eine erfolgreiche und vertrauensvolle
        Zusammenarbeit mit Kunden, Mitarbeitern und Partnern.
      </p>
      <img className={css.image} src={AboutUS} alt="Zusammenarbeit" />
      <h3 className={css.subheading}>SPEZIALISIERUNG UND ZIELSETZUNG</h3>
      <p className={css.text}>
        Unser Ziel ist die professionelle Reinigung von Treppenhäusern und
        Privatwohnungen bis hin zu großen Industrie- und Gewerbeobjekten.
      </p>
      <h3 className={css.subheading}>PRINZIPIEN DER UNTERNEHMENSFÜHRUNG</h3>
      <p className={css.text}>
        Beständigkeit, Verantwortung, Rechenschaftspflicht, Fairness,
        Transparenz, Effizienz und Einhaltung von Grundsätzen
      </p>
      <h3 className={css.subheading}>UNSERE ZIELE</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <HiOutlineViewGridAdd className={css.icon} />
          Wir erweitern unser Leistungsspektrum kontinuierlich, damit unsere
          Kunden alle Reinigungsbedürfnisse an einem Ort abdecken können
        </li>
        <li className={css.listItem}>
          <HiOutlineUserGroup className={css.icon} />
          Wir schaffen ein starkes Netzwerk aus motivierten und qualifizierten
          Fachkräften in der Reinigungsbranche
        </li>
        <li className={css.listItem}>
          <HiOutlineAcademicCap className={css.icon} />
          Wir fördern die berufliche Weiterentwicklung unseres Teams und
          investieren in hochwertige, moderne Reinigungsprodukte und -geräte
        </li>
        <li className={css.listItem}>
          <FaHandshake className={css.icon} />
          Wir bauen langfristige, vertrauensvolle Beziehungen zu unseren Kunden
          durch gleichbleibend hohe Qualität und Verlässlichkeit auf
        </li>
      </ul>
      <h3 className={css.subheading}>Ihre Vorteile mit uns</h3>
      <ul className={css.list}>
        {whyChooseUsData.map((point, index) => (
          <li key={index} className={css.listItem}>
            {point}
          </li>
        ))}
      </ul>
      <div className={css.partnerSection}>
        <img
          src={PartnerImage}
          alt="Partnerschaft"
          className={css.partnerImage}
        />
        <div className={css.partnerText}>
          <h3>FÜR PARTNER</h3>
          <p>
            Wir sind offen für verlässliche Partnerschaften mit Lieferanten und
            anderen Unternehmen sowie für die Teilnahme an staatlichen
            Programmen und wichtigen Initiativen zur Entwicklung und
            Verbesserung des Lebens in Deutschland und weltweit
          </p>
          <p>
            <em>Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!</em>
          </p>
          <button className={css.partnerButton}>
            Ihre Anregungen und Fragen
          </button>
        </div>
      </div>
      <h2>Offene Stellen</h2>
      <ul className={css.jobCards}>
        {jobs.map((job) => (
          <li key={job.id} className={css.jobCard}>
            <Link to={`/jobs/${job.id}`} className={css.jobLinkCard}>
              <img src={job.image} alt={job.title} className={css.jobImage} />
              <div className={css.jobTitle}>{job.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
