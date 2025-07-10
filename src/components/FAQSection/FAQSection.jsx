import React, { useState } from "react";
import css from "./FAQSection.module.css";
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

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={css.faqSection}>
      <div className={css.faqLeft}>
        <h2 className={css.heading}>Häufige Fragen beantwortet</h2>

        <div className={css.faqList}>
          {faqs.map((item, index) => (
            <div key={index} className={css.faqItem}>
              <button
                className={css.faqQuestion}
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

        <textarea
          className={css.messageBox}
          placeholder="Ihre Nachricht an uns"
        ></textarea>
        <button className={css.sendButton}>Nachricht senden</button>
      </div>
    </section>
  );
};

export default FAQSection;
