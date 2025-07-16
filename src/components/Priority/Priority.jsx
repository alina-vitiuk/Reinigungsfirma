import css from "./Priority.module.css";

import { CgTime } from "react-icons/cg";
import { PiCertificate } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import heroImg from "../../Images/hero.png";

const priorityData = [
  {
    icon: <IoHomeOutline />,
    title: "Individuelle Reinigungen",
    description:
      "Maßgeschneiderte Reinigungslösungen, die sich Ihren Bedürfnissen anpassen",
  },
  {
    icon: <CiStar />,
    title: "Konstante Spitzenqualität",
    description:
      "Wir garantieren gleichbleibend hohe Qualität bei jeder Reinigung.",
  },
  {
    icon: <CgTime />,
    title: "Zeit- und Ressourceneffizient",
    description:
      "Optimierte Prozesse sparen Zeit und Ressourcen, ohne Kompromisse bei der Qualität.",
  },
  {
    icon: <PiCertificate />,
    title: "Jahrelange Erfahrung & Zufriedenheit",
    description:
      "Vertrauen Sie auf unsere langjährige Erfahrung und die Zufriedenheit unserer Kunden.",
  },
];

const PriorityItem = ({ icon, title, description }) => (
  <li className={css.listItem}>
    <div className={css.listIcon}>{icon}</div>
    <h3 className={css.itemTitle}>{title}</h3>
    <p>{description}</p>
  </li>
);

const Priority = () => {
  return (
    <section className={css.container}>
      <h2 className={css.hidden}>Priority</h2>
      <img
        className={css.image}
        src={heroImg}
        alt="Reinigung"
        width="560"
        height="560"
      />
      <div>
        <h2 className={css.text}>Warum LIK Reinigungsservice wählen?</h2>
        <p className={css.subtext}>
          Wir bieten mehr als nur Reinigung. Wir schaffen eine Umgebung, in der
          Sie sich wohlfühlen und Ihre Zeit optimal nutzen können.
        </p>
        <ul className={css.listContainer}>
          {priorityData.map((item, index) => (
            <PriorityItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Priority;
