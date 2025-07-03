import React from "react";
import { Link } from "react-router-dom";
import css from "./Jobs.module.css";
import jobs from "../../data/jobData";

const Jobs = () => {
  return (
    <main className={css.jobsPage}>
      <h2 className={css.heading}>Offene Stellen</h2>
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
