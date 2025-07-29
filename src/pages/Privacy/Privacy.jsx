import React from "react";
import css from "./Privacy.module.css";

const Privacy = () => {
  return (
    <section className={css.section}>
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir freuen uns über Ihr Interesse an unserem Unternehmen und unserer
        Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
        Anliegen. Nachfolgend informieren wir Sie über die Erhebung,
        Verarbeitung und Nutzung Ihrer personenbezogenen Daten gemäß den
        geltenden Datenschutzbestimmungen (DSGVO).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Olena Yuksel und Iryna Tomanova GbR
        <br />
        Ballindamm 13
        <br />
        20095 Hamburg
        <br />
        E-Mail: info@likreinigungsservice.com
        <br />
        Telefon: +49 176 61122476
        <br />
        Website: www.likreinigungsservice.com
      </p>

      <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>Wir erheben personenbezogene Daten, wenn Sie:</p>
      <ul>
        <li>unsere Website besuchen,</li>
        <li>unser Kontaktformular nutzen,</li>
        <li>uns per E-Mail oder Telefon kontaktieren.</li>
      </ul>
      <p>
        Zu den personenbezogenen Daten gehören z. B. Name, E-Mail-Adresse,
        Telefonnummer oder IP-Adresse.
      </p>

      <h2>3. Zweck der Verarbeitung</h2>
      <p>
        Die von Ihnen bereitgestellten Daten werden ausschließlich für folgende
        Zwecke genutzt:
      </p>
      <ul>
        <li>Beantwortung Ihrer Anfragen,</li>
        <li>Angebotserstellung und Vertragserfüllung,</li>
        <li>Verbesserung unseres Online-Angebots,</li>
        <li>Erfüllung gesetzlicher Pflichten.</li>
      </ul>

      <h2>4. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an einer funktionierenden Website und
        Kommunikation).
      </p>

      <h2>5. Weitergabe von Daten an Dritte</h2>
      <p>
        Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies für die
        Vertragserfüllung erforderlich ist (z. B. an Zahlungs- oder
        IT-Dienstleister) oder wenn wir gesetzlich dazu verpflichtet sind.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies, um die Nutzerfreundlichkeit zu
        erhöhen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
        gespeichert werden. Sie können die Verwendung von Cookies in den
        Einstellungen Ihres Browsers deaktivieren.
      </p>

      <h2>7. Dauer der Datenspeicherung</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie es für die oben
        genannten Zwecke notwendig ist oder gesetzliche Aufbewahrungspflichten
        bestehen.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>
          Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15
          DSGVO),
        </li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
      </ul>
      <p>
        Zur Ausübung dieser Rechte wenden Sie sich bitte an:
        info@likreinigungsservice.com
      </p>

      <h2>9. Sicherheit</h2>
      <p>
        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um
        Ihre Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.
      </p>

      <h2>10. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen,
        um aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen
        unserer Leistungen umzusetzen.
      </p>
    </section>
  );
};

export default Privacy;
