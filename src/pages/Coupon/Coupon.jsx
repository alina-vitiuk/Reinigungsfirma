import React from "react";
import css from "./Coupon.module.css";
import Geschenkgutschein from "../../Images/Gutschein.png";

const Coupon = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.introBlock}>
        <div className={css.textBlock}>
          <h1>Bereiten Sie Ihren Liebsten eine besondere Freude</h1>
          <h2>
            <span className={css.highlight}>Geschenkgutschein</span> <br />
            für alle Dienstleistungen von Sauberkeit Leader
          </h2>
          <p>
            Dem Inhaber des Zertifikats wird ein Rabatt von 10 % auf die
            Inanspruchnahme der Dienstleistung gewährt, sofern das Zertifikat
            für einen Betrag von 2.000 Euro erworben wurde.
          </p>
          <h3>Summe</h3>
          <p>
            Der Mindestbetrag des Zertifikats beträgt 100 Euro. <br />
            Sie können ein Zertifikat für jeden Betrag ab 100 Euro bestellen.
          </p>
          <h3>Nutzungsbedingungen</h3>
          <p>
            Das Zertifikat hat kein Ablaufdatum. <br />
            Es kann an jedem Tag ohne Einschränkungen genutzt werden.
          </p>
          <button className={css.primaryBtn}>ein Zertifikat bestellen</button>
        </div>

        <div className={css.imageBlock}>
          <img
            src={Geschenkgutschein}
            alt="Geschenkgutschein"
            className={css.image}
          />
        </div>
      </div>

      <div className={css.conditions}>
        <div className={css.boxGroup}>
          <div className={css.conditionBox}>
            <h3>Grundvorraussetzungen für den Erhalt des Zertifikats</h3>
            <ol>
              <li>
                Geben Sie eine Bestellung auf der Website auf oder schreiben Sie
                uns oder rufen Sie uns an (+49 17661122476, WhatsApp).
              </li>
              <li>
                Unser Manager wird Sie innerhalb von 2 Tagen kontaktieren.
              </li>
              <li>Die Zahlung erfolgt bargeldlos per Rechnung.</li>
              <li>
                Die Lieferung des Zertifikats kann nach Vereinbarung in
                Papierform oder in elektronischer Form auf jedem verfügbaren Weg
                erfolgen.
              </li>
            </ol>
          </div>

          <div className={css.conditionBox}>
            <h3>Lieferung</h3>
            <p>
              Sie können die Urkunde Ihren Liebsten selbst überreichen oder wir
              erledigen das für Sie.
            </p>
            <ul>
              <li>Sie können das Zertifikat im Büro abholen.</li>
              <li>Wir können es Ihnen per Post oder DHL-Lieferung zusenden.</li>
              <li>
                Wir bieten einen Service für die Übergabe eines Geschenks an den
                Empfänger durch einen Mitarbeiter des Unternehmens an,
                einschließlich des Kaufs eines Blumenstraußes oder einer
                Süßigkeit (gegen eine gesonderte Gebühr).
              </li>
              <li>In elektronischer Form per E-Mail oder Messenger.</li>
            </ul>
          </div>

          <div className={css.conditionBox}>
            <h3>Grundbedingungen für die Nutzung des Zertifikats</h3>
            <ol>
              <li>
                Der Empfänger kontaktiert uns auf dem für ihn bequemen Weg
                (E-Mail oder Anruf) und gibt die Zertifikatsnummer und seine
                Daten an.
              </li>
              <li>
                Auf Wunsch des Leistungsempfängers erstellt unser Verwalter eine
                Berechnung* der Reinigungskosten im Rahmen des
                Zertifikatsbetrags oder mit einer Zuzahlung und sendet sie ihm
                zur Genehmigung zu.
              </li>
              <li>
                Es wird eine Vereinbarung getroffen, wonach unsere
                Reinigungskraft die Aufgabe gemäß den festgelegten
                Vereinbarungen ausführt.
              </li>
              <li>
                Auf Wunsch hinterlässt der Kunde eine Bewertung der
                abgeschlossenen Arbeiten auf der Website oder beim
                Unternehmensleiter.
              </li>
            </ol>
            <p>
              <em>
                *Der Preis pro Stunde wird aus dem zum Zeitpunkt der Anforderung
                des Kunden-Empfängers der Dienstleistung bestehenden Tarif
                berechnet.
              </em>
            </p>
          </div>

          <div className={css.conditionBox}>
            <h3>Warum sollten Sie den Geschenkgutschein-Service nutzen?</h3>
            <ul>
              <li>
                Dieses Geschenk wird garantiert niemand beiseitelegen! Es ist
                eine wertvolle und sinnvolle Wahl für alle, die ihre eigene
                Gesundheit und die ihrer Liebsten schätzen.
              </li>
              <li>
                Ein Zertifikat ist die Chance, jemandem etwas zu ermöglichen,
                das sie sich vielleicht bisher nicht leisten konnte oder immer
                aufgeschoben hat. Und genau diese Freude schenkst du ihr!
              </li>
              <li>
                Es ist unkompliziert und bequem – viele Formalitäten entfallen.
                Ein Anruf bei uns genügt!
              </li>
              <li>
                Sie entscheiden ganz flexibel, wann und wie Sie Ihr Zertifikat
                nutzen möchten.
              </li>
              <li>
                Es vereint Stil und Zweck: repräsentativ, praktisch und mit viel
                Herz.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coupon;
