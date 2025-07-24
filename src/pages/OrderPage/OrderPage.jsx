import React from "react";
import css from "./OrderPage.module.css";

const OrderPage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.heading}>Kostenlose Preisberechnung</h1>
      <form className={css.form}>
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
                <input type="checkbox" name="service[]" />
                <span>Büroreinigung</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Treppenreinigung</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung von Einkaufsbereichen</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung von Industriegebäuden</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung in Schulen und Kindergärten</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung in Hotels</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung in Cafes und Restaurants</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung in Sporthallen</span>
              </label>
            </div>
            <div>
              <strong>Für Privatkunden</strong>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Wohnungsreinigung</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Hausreinigung</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung nach der Reparatur</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Aufräumen nach den Feierlichkeiten</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung bei Umzug</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Reinigung von Terrassen, Balkonen, Garagen</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Vorbereitung der Wohnung vor dem Verkauf</span>
              </label>
              <label>
                <input type="checkbox" name="service[]" />
                <span>Andere</span>
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Art der Reinigung*</legend>
          <label>
            <input type="checkbox" name="type[]" />
            <span>Basic</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" />
            <span>Regulär</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" />
            <span>Allgemein</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" />
            <span>Nach der Renovierung</span>
          </label>
          <label>
            <input type="checkbox" name="type[]" />
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
            <input type="checkbox" name="extra[]" />
            <span>Chemische Reinigung von Polstermöbeln</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Fensterputzen</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Teppichreinigung</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Waschen und Bügeln</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Reinigung von Haushaltsgeräten</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Entrümpelung</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
            <span>Gartenpflege</span>
          </label>
          <label>
            <input type="checkbox" name="extra[]" />
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

        <label className={css.label}>
          Foto/Video hinzufügen
          <input
            type="file"
            name="media"
            accept="image/*,video/*"
            className={css.input}
          />
        </label>

        <button type="submit" className={css.submit}>
          Schicken
        </button>
      </form>
    </section>
  );
};

export default OrderPage;
