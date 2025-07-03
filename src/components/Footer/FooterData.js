import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    text: "Ballindamm 13, 20095 Hamburg",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+49 1766 112 2476*",
    href: "tel:+4917661122476",
  },
  {
    icon: <FaEnvelope />,
    text: "sauberkeit.leader@gmail.com",
    href: "mailto:sauberkeit.leader@gmail.com",
  },
];

export const menuLinks = [
  { label: "Start", href: "#" },
  { label: "Über Uns", href: "#" },
  { label: "Dienstleistungen", href: "#" },
  { label: "Kontakt", href: "#" },
];

export const openingHours = [
  "Mo - Do: 9:00 - 18:00",
  "Fr: 9:00 - 16:00",
  "Sa: 10:00 - 14:00",
];
