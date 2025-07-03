import React from "react";
import { useParams, Link } from "react-router-dom";
import jobData from "../../data/jobData";
import css from "./JobDetails.module.css";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData.find((job) => job.id === id);

  if (!job) {
    return <p className={css.error}>Stelle nicht gefunden.</p>;
  }

  return (
    <section className={css.jobDetails}>
      <h1>{job.title}</h1>
      <img src={job.image} alt={job.title} className={css.jobImage} />
      <p className={css.type}>{job.type}</p>

      {job.details && (
        <div className={css.detailsBox}>
          <p>
            <strong>Berichtet an:</strong> {job.details.reportsTo}
          </p>

          <h3 className={css.subheading}>Hauptverantwortlichkeiten</h3>
          <ul className={css.list}>
            {job.details.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className={css.subheading}>Anforderungen</h3>
          <ul className={css.list}>
            {job.details.requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={css.buttonGroup}>
        <Link to="/resume" className={css.actionButton}>
          Lebenslauf senden
        </Link>
        <Link to="/contact" className={css.actionButtonOutline}>
          Eine Frage stellen
        </Link>
      </div>
    </section>
  );
};

export default JobDetails;
