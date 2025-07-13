import css from "./Hero.module.css";

const Header = () => {
  return (
    <section className={css.container}>
      <h1 className={css.heroText}>
        Liebe Kundinnen und Kunden! Wir freuen uns, Ihnen unsere
        Reinigungsdienste anbieten zu können und werden alle Ihre Wünsche
        berücksichtigen. Wir arbeiten für Sie und Ihren Komfort.
      </h1>
      <p className={css.heroSubtext}>Mit Liebe LIK Reinigungsservice Team</p>
    </section>
  );
};

export default Header;
