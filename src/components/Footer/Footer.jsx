import React from "react";
import css from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.top}>
        <div className={css.left}>
          <p className={css.slogan}>
            Bei uns ist es zuverlässig und einfach.
            <br />
            Mit Liebe <br /> <strong>LIK Reinigungsservice</strong> Team
          </p>
          <ul className={css.contact}>
            <li>
              <p>
                <FaMapMarkerAlt className={css.icon} /> Ballindamm 13, 20095
                Hamburg
              </p>
            </li>
            <li>
              <a href="tel:+4917661122476">
                <FaPhoneAlt className={css.icon} /> +49 1766 112 2476
              </a>
            </li>
            <li>
              <a href="mailto:likreinigungsservice@gmail.com">
                <FaEnvelope className={css.icon} />{" "}
                likreinigungsservice@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className={css.center}>
          <h4>Menü</h4>
          <ul>
            <li>
              <Link to="/" className={css.menuLink}>
                Start
              </Link>
            </li>
            <li>
              <Link to="/uber-uns" className={css.menuLink}>
                Über Uns
              </Link>
            </li>
            <li>
              <Link to="/leistungen" className={css.menuLink}>
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="/contact" className={css.menuLink}>
                Kontakt
              </Link>
            </li>
          </ul>
          <div className={css.socialLinks}>
            <a
              href="https://www.instagram.com/lik_reinigungsservice?igsh=bGF4dDd1cWowOHds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1BfhvREpk9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className={css.right}>
          <h4>Öffnungszeiten für Anrufe</h4>
          <ul>
            <li>Mo - Do: 9:00 - 18:00</li>
            <li>Fr: 9:00 - 16:00</li>
            <li>Sa: 10:00 - 14:00</li>
          </ul>
          <button className={css.callbackBtn}>Wir rufen Sie zurück</button>
        </div>
      </div>

      <div className={css.bottom}>
        <Link to="/impressum" className={css.bottomText}>
          &copy; {new Date().getFullYear()} LIK Reinigungsservice. Alle Rechte
          vorbehalten.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
