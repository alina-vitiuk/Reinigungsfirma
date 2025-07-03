import React from "react";
import css from "./Impressum.module.css";

const Impressum = () => {
  return (
    <main className={css.impressum}>
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Olena Yuksel und Iryna Tomanova GbR
          <br />
          Ballindamm 13
          <br />
          20095 Hamburg
        </p>

        <h3>Vertreten durch die Gesellschafter:</h3>
        <p>
          Olena Yuksel (Geschäftsführer)
          <br />
          Iryna Tomanova (leitender Teilnehmer)
        </p>

        <h3>Kontakt:</h3>
        <p>
          Telefon: +49 176 61122476
          <br />
          E-Mail: <a href="mailto:">likreinigungsservice@gmail.com</a>
          <br />
          Webseite: <a href="#">[Domain einfügen]</a>
        </p>

        <h3>Berufshaftpflichtversicherung:</h3>
        <p>
          GENERALI
          <br />
          Brandstücken 24
          <br />
          22549 Hamburg
          <br />
          Geltungsraum der Versicherung: Deutschland
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
        <p>
          Olena Yuksel
          <br />
          Iryna Tomanova
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers.
        </p>
      </section>
    </main>
  );
};

export default Impressum;
