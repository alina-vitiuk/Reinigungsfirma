import React, { useState, useRef } from "react";
import css from "./Contact.module.css";
import { HiMail, HiPhone } from "react-icons/hi";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const formRef = useRef();
  const [service, setService] = useState("Büroreinigung");
  const [city, setCity] = useState("Hamburg");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      service,
      city,
      message,
    };

    emailjs
      .send(
        "service_b2fiv48",
        "template_jnzp84d",
        templateParams,
        "905YbsfLmHZ_AUaD4"
      )
      .then(() => {
        toast.success("✅ Anfrage wurde erfolgreich gesendet!");
        setMessage("");
        setService("Büroreinigung");
        setCity("Hamburg");
      })
      .catch((error) => {
        console.error("FEHLER:", error);
        toast.error("❌ Fehler beim Senden der Nachricht.");
      });
  };

  return (
    <main className={css.contactPage}>
      <h1 className={css.title}>
        Stellen Sie Ihre Anfrage mit nur wenigen Klicks
      </h1>

      <div className={css.contactCards}>
        <a href="mailto:info@likreinigungsservice.com" className={css.card}>
          <HiMail className={css.icon} />
          info@likreinigungsservice.com
        </a>
        <a href="tel:+4917661122476" className={css.card}>
          <HiPhone className={css.icon} />
          +49 176 6112 2476
        </a>
      </div>

      <form ref={formRef} className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="service" className={css.label}>
          Gewünschte Dienstleistung:
        </label>
        <select
          id="service"
          name="service"
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

        <label htmlFor="city" className={css.label}>
          Stadt:
        </label>
        <select
          id="city"
          name="city"
          className={css.select}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option>Hamburg</option>
        </select>

        <label htmlFor="message" className={css.label}>
          Nachricht:
        </label>
        <textarea
          id="message"
          name="message"
          className={css.textarea}
          placeholder="Ihre Nachricht an uns"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className={css.button}>
          Weiter
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default ContactPage;
