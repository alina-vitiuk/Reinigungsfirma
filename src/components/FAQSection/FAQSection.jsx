import React, { useState } from "react";
import css from "./FAQSection.module.css";
import emailjs from "emailjs-com";
import { HiChevronDown, HiMail, HiPhone } from "react-icons/hi";

const faqs = [
  {
    question: "Wann findet die Reinigung statt?",
    answer:
      "Die Reinigungszeiten werden individuell vereinbart – wir richten uns flexibel nach Ihren Wünschen.",
  },
  {
    question: "Welche Reinigungsmittel werden verwendet?",
    answer:
      "Wir verwenden ausschließlich geprüfte, umweltfreundliche Produkte, die für Mensch und Material sicher sind.",
  },
  {
    question: "Wie kurzfristig kann ich buchen?",
    answer:
      "Dank Schnellbuchung können Termine noch am selben Tag oder am Wochenende vereinbart werden.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [form, setForm] = useState({ phone: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b2fiv48", // Обов'язково вкажи свій Service ID
        "template_sbnd64m",
        {
          title: "Kontaktformular", // Значення за замовчуванням
          name: "Website-Anfrage", // Значення за замовчуванням
          phone: form.phone,
          email: "noreply@example.com", // Значення за замовчуванням
          message: form.message,
        },
        "905YbsfLmHZ_AUaD4"
      )
      .then(() => {
        setIsSent(true);
        setForm({ phone: "", message: "" });
      })
      .catch((err) => {
        console.error("Send failed", err);
      });
  };

  return (
    <section className={css.faqSection}>
      <div className={css.faqLeft}>
        <h2 className={css.heading}>Häufige Fragen beantwortet</h2>

        <div className={css.faqList}>
          {faqs.map((item, index) => (
            <div key={index} className={css.faqItem}>
              <button
                className={`${css.faqQuestion} ${
                  activeIndex === index ? css.active : ""
                }`}
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <HiChevronDown
                  className={`${css.icon} ${
                    activeIndex === index ? css.iconOpen : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className={css.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={css.faqRight}>
        <p className={css.contactText}>Wir beantworten gerne Ihre Fragen.</p>

        <div className={css.contactBox}>
          <HiMail className={css.contactIcon} />
          <a href="mailto:likreinigungsservice@gmail.com">
            likreinigungsservice@gmail.com
          </a>
        </div>

        <div className={css.contactBox}>
          <HiPhone className={css.contactIcon} />
          <a href="tel:+4917661122476">+49 176 6112 2476</a>
        </div>

        <form onSubmit={handleSend}>
          <input
            type="tel"
            name="phone"
            placeholder="Ihre Telefonnummer*"
            className={css.phoneInput}
            required
            pattern="^[+0-9\s\-]{6,}$"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            className={css.messageBox}
            name="message"
            placeholder="Ihre Nachricht an uns"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className={css.sendButton}>
            Nachricht senden
          </button>
        </form>

        {isSent && (
          <p className={css.successMsg}>Nachricht wurde gesendet ✅</p>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
