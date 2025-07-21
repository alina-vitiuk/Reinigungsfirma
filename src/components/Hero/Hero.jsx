import React, { useEffect, useState } from "react";
import css from "./Hero.module.css";

const imagesMobile = [
  new URL("../../Images/Hero1-mobile.jpg", import.meta.url).href,
  new URL("../../Images/Hero2-mobile.jpg", import.meta.url).href,
];

const imagesTablet = [
  new URL("../../Images/Hero1-tablet.jpg", import.meta.url).href,
  new URL("../../Images/Hero2-tablet.jpg", import.meta.url).href,
];

const imagesDesktop = [
  new URL("../../Images/Hero1.jpg", import.meta.url).href,
  new URL("../../Images/Hero2.jpg", import.meta.url).href,
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={css.hero}>
      <picture>
        <source srcSet={imagesMobile[activeImage]} media="(max-width: 767px)" />
        <source
          srcSet={imagesTablet[activeImage]}
          media="(max-width: 1279px)"
        />
        <img
          src={imagesDesktop[activeImage]}
          alt={`Hero ${activeImage + 1}`}
          className={css.image}
        />
      </picture>
    </section>
  );
};

export default Hero;
