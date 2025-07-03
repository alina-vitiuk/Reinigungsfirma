import css from "./Offer.module.css";

const Offer = () => {
  return (
    <section className={css.container}>
      <div className={css.sectionTop}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#e8f6ff"
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <h3 className={css.offerText}>Unser Neukundenangebot:</h3>
      <div className={css.offerHighlight}>10% Rabatt!</div>
      <p className={css.offerSubtext}>
        Erhalten Sie als Neukunde 10% auf Ihre erste Monatsrechnung.*
      </p>
      <button className={css.offerButton}>Das klingt interessant</button>
      <div className={css.sectionTop2}>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#e8f6ff"
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Offer;
