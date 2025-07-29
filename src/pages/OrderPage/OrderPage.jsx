import React, { useRef } from "react";
import css from "./OrderPage.module.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const OrderPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b2fiv48",
        "template_0nn582k",
        formRef.current,
        "905YbsfLmHZ_AUaD4"
      )
      .then(() => {
        toast.success("✅ Formular wurde erfolgreich gesendet!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("FEHLER:", error);
        toast.error("❌ Es gab einen Fehler beim Senden.");
      });
  };

  return (
    <section className={css.section}>
      <h1 className={css.heading}>Kostenlose Preisberechnung</h1>
      <form ref={formRef} onSubmit={sendEmail} className={css.form}>
        <div className={css.rowTwoCols}>
          <label className={css.label}>
            Ihr Name*
            <input type="text" name="name" required className={css.input} />
          </label>
          <label className={css.label}>
            Ihr Telefon
            <input type="tel" name="phone" className={css.input} />
          </label>
        </div>

        <label className={css.label}>
          Ihre E-Mail*
          <input type="email" name="email" required className={css.input} />
        </label>

        <label className={css.label}>
          Stadt*
          <input
            type="text"
            name="city"
            defaultValue="Hamburg"
            required
            className={css.input}
          />
        </label>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Wählen Sie einen Dienst aus*</legend>
          <div className={css.serviceGroups}>
            <div>
              <strong>Für Unternehmen und Organisationen</strong>
              <label>
                <input type="checkbox" name="service[]" value="Büroreinigung" />
                <span>Büroreinigung</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Treppenreinigung"
                />
                <span>Treppenreinigung</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung von Einkaufsbereichen"
                />
                <span>Reinigung von Einkaufsbereichen</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung von Industriegebäuden"
                />
                <span>Reinigung von Industriegebäuden</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung in Schulen und Kindergärten"
                />
                <span>Reinigung in Schulen und Kindergärten</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung in Hotels"
                />
                <span>Reinigung in Hotels</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung in Cafes und Restaurants"
                />
                <span>Reinigung in Cafes und Restaurants</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung in Sporthallen"
                />
                <span>Reinigung in Sporthallen</span>
              </label>
            </div>
            <div>
              <strong>Für Privatkunden</strong>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Wohnungsreinigung"
                />
                <span>Wohnungsreinigung</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" value="Hausreinigung" />
                <span>Hausreinigung</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung nach der Reparatur"
                />
                <span>Reinigung nach der Reparatur</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Aufräumen nach den Feierlichkeiten"
                />
                <span>Aufräumen nach den Feierlichkeiten</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung bei Umzug"
                />
                <span>Reinigung bei Umzug</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Reinigung von Terrassen, Balkonen, Garagen"
                />
                <span>Reinigung von Terrassen, Balkonen, Garagen</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="service[]"
                  value="Vorbereitung der Wohnung vor dem Verkauf"
                />
                <span>Vorbereitung der Wohnung vor dem Verkauf</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" value="Andere" />
                <span>Andere</span>
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Art der Reinigung*</legend>
          <label>
            <input type="checkbox" name="type[]" value="Basic" />
            <span>Basic</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" value="Regulär" />
            <span>Regulär</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" value="Allgemein" />
            <span>Allgemein</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" value="Nach der Renovierung" />
            <span>Nach der Renovierung</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" value="Nach dem Umzug" />
            <span>Nach dem Umzug</span>
          </label>
        </fieldset>

        <div className={css.rowTwoCols}>
          <label className={css.label}>
            Datum (von)*
            <input
              type="date"
              name="date_from"
              required
              className={css.input}
            />
          </label>
          <label className={css.label}>
            bis*
            <input type="date" name="date_to" required className={css.input} />
          </label>
        </div>

        <label className={css.label}>
          Anzahl der Objekte (an unterschiedlichen Adressen)*
          <input
            type="number"
            name="obj_count"
            required
            className={css.input}
          />
        </label>

        <label className={css.label}>
          Gesamtfläche aller Objekte*
          <input type="text" name="total_area" required className={css.input} />
        </label>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Zusätzlicher Service</legend>
          <label>
            <input
              type="checkbox"
              name="extra[]"
              value="Chemische Reinigung von Polstermöbeln"
            />
            <span>Chemische Reinigung von Polstermöbeln</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Fensterputzen" />
            <span>Fensterputzen</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Teppichreinigung" />
            <span>Teppichreinigung</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Waschen und Bügeln" />
            <span>Waschen und Bügeln</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="extra[]"
              value="Reinigung von Haushaltsgeräten"
            />
            <span>Reinigung von Haushaltsgeräten</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Entrümpelung" />
            <span>Entrümpelung</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Gartenpflege" />
            <span>Gartenpflege</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" value="Kleine Reparaturen" />
            <span>Kleine Reparaturen</span>
          </label>
        </fieldset>

        <label className={css.label}>
          Verfügbarkeit eines Badezimmers (Anzahl)*
          <input type="number" name="baths" required className={css.input} />
        </label>
        <label className={css.label}>
          Verfügbarkeit der Küche (Anzahl)*
          <input type="number" name="kitchen" required className={css.input} />
        </label>
        <label className={css.label}>
          Verfügbarkeit des Esszimmers (Anzahl)*
          <input type="number" name="dining" required className={css.input} />
        </label>

        {/* <label className={css.label}>
          Foto/Video hinzufügen
          <input
            type="file"
            name="media"
            accept="image/*,video/*"
            className={css.input}
          />
        </label> */}

        <button type="submit" className={css.submit}>
          Schicken
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
    </section>
  );
};

export default OrderPage;
