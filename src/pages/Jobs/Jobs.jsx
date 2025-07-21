import React from "react";
import { Link } from "react-router-dom";
import css from "./Jobs.module.css";
import jobs from "../../data/jobData";
import {
  FaClock,
  FaHandshake,
  FaMoneyBillWave,
  FaRocket,
} from "react-icons/fa";

const Jobs = () => {
  return (
    <main className={css.jobsPage}>
      <h2 className={css.heading}>Offene Stellen</h2>

      <p className={css.intro}>
        Sie sind auf der Suche nach einem sicheren und wertschätzenden
        Arbeitsplatz? Dann sind Sie bei uns genau richtig!
        <br /> Wir bieten faire und pünktliche Bezahlung, flexible Arbeitszeiten
        und ein herzliches, unterstützendes Team. Bei uns erwartet Sie nicht nur
        ein Job, sondern eine langfristige Perspektive in einem wachsenden
        Unternehmen. Ob mit oder ohne Erfahrung – wir freuen uns auf motivierte
        Menschen, die mit Engagement und Verantwortungsbewusstsein mitgestalten
        möchten. <br />
        Werden Sie Teil unseres Teams – gemeinsam sorgen wir für Sauberkeit,
        Ordnung und Zufriedenheit bei unseren Kunden.
      </p>

      <section className={css.whyUs}>
        <h3>Warum bei uns arbeiten?</h3>
        <div className={css.whyGrid}>
          <div className={css.whyCard}>
            <FaClock className={css.whyIcon} />
            <h4>Flexible Arbeitszeiten</h4>
            <p>
              Teilzeit, Minijob oder individuelle Stundenmodelle – wir richten
              uns nach Ihnen.
            </p>
          </div>
          <div className={css.whyCard}>
            <FaHandshake className={css.whyIcon} />
            <h4>Angenehmes Team</h4>
            <p>
              Ein respektvoller, unterstützender Umgang ist für uns
              selbstverständlich.
            </p>
          </div>
          <div className={css.whyCard}>
            <FaMoneyBillWave className={css.whyIcon} />
            <h4>Faire Bezahlung</h4>
            <p>
              Transparente Vergütung mit Zuschlägen und pünktlicher Auszahlung.
            </p>
          </div>
          <div className={css.whyCard}>
            <FaRocket className={css.whyIcon} />
            <h4>Aufstieg möglich</h4>
            <p>
              Langfristige Perspektiven und Entwicklungsmöglichkeiten im Team.
            </p>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default Jobs;
