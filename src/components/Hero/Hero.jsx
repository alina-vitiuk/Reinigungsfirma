import css from "./Hero.module.css";

const Header = () => {
  return (
    <section className={css.container}>
      <h1 className={css.heroText}>
        Die Reinigungsfirma in Hamburg, <br />
        die im Gedächtnis bleibt
      </h1>
      <p className={css.heroSubtext}>Sorgenfreie Sauberkeit für Ihre Räume</p>
    </section>
  );
};

export default Header;
