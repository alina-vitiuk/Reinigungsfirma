import css from "./Hero.module.css";

const Header = () => {
  return (
    <section className={css.container}>
      <h1 className={css.heroText}>
        Liebe Kundinnen und Kunden, wir freuen uns, Ihnen unsere
        Reinigungsdienste anbieten zu dürfen und werden dabei all Ihre Wünsche
        berücksichtigen. Wir arbeiten für Sie und Ihren Komfort.
      </h1>
      <p className={css.heroSubtext}>
        Mit herzlichen Grüßen <br />
        Ihr LIK Reinigungsservice-Team
      </p>
    </section>
  );
};

export default Header;
