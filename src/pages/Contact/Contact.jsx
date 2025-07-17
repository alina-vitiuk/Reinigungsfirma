import React, { useState } from "react";
import css from "./Contact.module.css";
import { HiMail, HiPhone } from "react-icons/hi";

const ContactPage = () => {
  const [service, setService] = useState("Büroreinigung");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@likservice.de?subject=Anfrage: ${encodeURIComponent(
      service
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className={css.contactPage}>
      <h1 className={css.title}>
        Stellen Sie Ihre Anfrage mit nur wenigen Klicks
      </h1>

      <div className={css.contactCards}>
        <a href="mailto:likreinigungsservice@gmail.com" className={css.card}>
          <HiMail className={css.icon} />
          likreinigungsservice@gmail.com
        </a>
        <a href="tel:+4917661122476" className={css.card}>
          <HiPhone className={css.icon} />
          +49 176 6112 2476
        </a>
      </div>

      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="service" className={css.label}>
          Gewünschte Dienstleistung:
        </label>
        <select
          id="service"
          className={css.select}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Büroreinigung</option>
          <option>Praxisreinigung</option>
          <option>Aufgangsreinigung</option>
          <option>Unterhaltsreinigung</option>
          <option>Schulreinigung</option>
          <option>Kitareinigung</option>
          <option>Sonstige</option>
        </select>

        <select
          id="service"
          className={css.select}
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option>Hamburg</option>
        </select>

        <textarea
          className={css.textarea}
          placeholder="Ihre Nachricht an uns"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className={css.button}>
          Weiter
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
