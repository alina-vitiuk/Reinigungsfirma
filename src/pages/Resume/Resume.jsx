import React, { useState } from "react";
import css from "./Resume.module.css";

const Bewerbung = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bewerbung erfolgreich versendet!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      file: null,
    });
  };

  return (
    <section className={css.bewerbung}>
      <h1>Bewerbung senden</h1>
      <p>Wir freuen uns auf Ihre Bewerbung!</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          E-Mail:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Telefonnummer:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Gewünschte Position:
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Bitte wählen...</option>
            <option value="Manager">Manager</option>
            <option value="Qualitätskontrolleur/in">
              Qualitätskontrolleur/in
            </option>
            <option value="Reinigungskraft">Reinigungskraft</option>
          </select>
        </label>

        <label>
          Nachricht:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <label>
          Lebenslauf hochladen:
          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Senden</button>
      </form>
    </section>
  );
};

export default Bewerbung;
