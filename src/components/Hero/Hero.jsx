import React, { useEffect, useState } from "react";
import css from "./Hero.module.css";

const images = [
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
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index + 1}`}
          className={`${css.image} ${
            index === activeImage ? css.visible : css.hidden
          }`}
        />
      ))}
    </section>
  );
};

export default Hero;
