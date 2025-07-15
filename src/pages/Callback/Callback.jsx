import React, { useState } from "react";
import css from "./Callback.module.css";

const Callback = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    // TODO: надіслати дані (через EmailJS, Formspree або інше)
    alert("Vielen Dank! Wir rufen Sie bald zurück.");
  };

  return (
    <section className={css.callbackSection}>
      <h1>Rückruf anfordern</h1>
      <form className={css.callbackForm} onSubmit={handleSubmit}>
        <label>
          Ihr Name*
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefonnummer*
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Kommentar (optional)
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Absenden</button>
      </form>
    </section>
  );
};

export default Callback;
