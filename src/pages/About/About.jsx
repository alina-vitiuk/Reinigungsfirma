import React from "react";
import css from "./About.module.css";

import bannerDesktop from "../../Images/About.jpg";
import bannerTablet from "../../Images/About-tablet.jpg";
import bannerMobile from "../../Images/About-mobile.jpg";

import teamData from "../../data/teamData";
import {
  FaClipboardList,
  FaCommentDots,
  FaCalendarCheck,
  FaUserCheck,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className={css.aboutWrapper}>
      <section className={css.bannerSection}>
        <picture>
          <source srcSet={bannerDesktop} media="(min-width: 1280px)" />
          <source srcSet={bannerTablet} media="(min-width: 768px)" />
          <img
            src={bannerMobile}
            alt="Reinigungsservice Banner"
            className={css.bannerImage}
          />
        </picture>
      </section>

      <section className={css.aboutSection}>
        <div className={css.aboutText}>
          <h2>Ihr Reinigungsservice</h2>
          <p>
            Als hanseatisches Unternehmen legen wir großen Wert auf
            Verlässlichkeit und Handschlagqualität. Unser Ziel ist es, für Sie
            gründlich, schnell und diskret zu arbeiten. Vertrauen Sie auf unser
            erfahrenes Team.
          </p>
          <ul className={css.bullets}>
            <li>Höchste Ansprüche an Qualität und Zuverlässigkeit</li>
            <li>Sorgfältiger Umgang mit Ihrem Eigentum</li>
            <li>Gründliche Sauberkeit bis ins Detail</li>
            <li>Faire Preise bei exzellentem Service</li>
          </ul>
        </div>
        <div className={css.aboutImage}>{/* Фото команди */}</div>
      </section>

      {/* Steps Section */}
      <section className={css.stepsSection}>
        <h2>Wie funktioniert es?</h2>
        <div className={css.stepsGrid}>
          <div className={css.step} data-step="Schritt 1">
            <FaClipboardList className={css.icon} />
            <h3>Buchungsformular ausfüllen</h3>
            <p>
              Tragen Sie Ihre Informationen in unser Formular ein – in nur 1–2
              Minuten ist alles erledigt.
            </p>
          </div>
          <div className={css.step} data-step="Schritt 2">
            <FaCommentDots className={css.icon} />
            <h3>Persönliche Einschätzung erhalten</h3>
            <p>
              Basierend auf Ihren Angaben erhalten Sie von uns eine individuell
              abgestimmte Einschätzung Ihres Reinigungsbedarfs.
            </p>
          </div>
          <div className={css.step} data-step="Schritt 3">
            <FaCalendarCheck className={css.icon} />
            <h3>Wunschtermin auswählen</h3>
            <p>
              Wählen Sie den Zeitpunkt aus, zu dem unser Reinigungsteam bei
              Ihnen vorbeikommen soll.
            </p>
          </div>
          <div className={css.step} data-step="Schritt 4">
            <FaUserCheck className={css.icon} />
            <h3>Ihr Reinigungsexperte kommt vorbei</h3>
            <p>
              Zum vereinbarten Termin erscheint unsere Fachkraft und sorgt für
              gründliche Sauberkeit bei Ihnen vor Ort.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={css.teamSection}>
        <h2>Unser Team</h2>
        <div className={css.teamGrid}>
          {teamData.map((member, i) => (
            <div key={i} className={css.teamCard}>
              <img
                // src={require(`../../assets/images/${member.image}`)}
                alt={member.name}
                className={css.teamImage}
              />
              <h3>{member.role}</h3>
              <p className={css.name}>{member.name}</p>
              <p className={css.description}>{member.description}</p>
              <p className={css.contact}>📞 {member.phone}</p>
              <p className={css.contact}>✉️ {member.email}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
