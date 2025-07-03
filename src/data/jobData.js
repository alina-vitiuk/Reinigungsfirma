import Job1 from "../Images/manager.png";
import Job2 from "../Images/controller.png";
import Job3 from "../Images/cleaner.png";

const jobData = [
  {
    id: "manager",
    title: "Manager",
    type: "Teilzeit / Vollzeit",
    image: Job1,
    details: {
      reportsTo: "Firma Administration",
      responsibilities: [
        "Koordination und Überwachung von Bürotätigkeiten",
        "Sicherstellung der ordnungsgemäßen Ablage von Dokumenten",
        "Verwaltung und Bestellung von Büromaterialien",
        "Zentrale Anlaufstelle für interne und externe Kommunikation",
        "Bearbeitung von eingehender Post, E-Mails und Telefonanrufen",
        "Terminmanagement für Führungskräfte und das Team",
        "Unterstützung bei der Personalplanung und -verwaltung",
        "Pflege von Personalakten und Überwachung von Urlaubs- und Krankheitszeiten",
        "Organisation von Mitarbeiterschulungen und -events",
        "Zusammenarbeit mit der Buchhaltung bei der Erstellung von Monats- und Jahresabschlüssen",
        "Verwaltung von Büroausstattung und -infrastruktur",
        "Vorbereitung von Präsentationen und Berichten",
        "Durchführung von Recherchen und Datenanalysen",
        "Sicherstellung eines gepflegten und sicheren Arbeitsumfelds",
      ],
      requirements: [
        "Abgeschlossene kaufmännische Ausbildung oder ein Studium im Bereich Betriebswirtschaft, Büromanagement oder einem verwandten Fachgebiet",
        "Fundierte Kenntnisse in Büroorganisation und -verwaltung",
        "Erfahrung im Umgang mit gängigen Bürosoftware-Programmen (z.B. MS Office, Buchhaltungssoftware)",
        "Ausgeprägte organisatorische Fähigkeiten und Multitasking-Kompetenz",
        "Hohe Zuverlässigkeit und Genauigkeit",
        "Selbstständige und strukturierte Arbeitsweise",
        "Hervorragende schriftliche und mündliche Kommunikationsfähigkeiten in Deutsch und Englisch",
        "Fähigkeit, mit verschiedenen Stakeholdern professionell und effektiv zu kommunizieren",
        "Fähigkeit, Prioritäten zu setzen und Deadlines einzuhalten",
        "Kreativität und Flexibilität im Umgang mit unerwarteten Herausforderungen",
        "Bereitschaft, bei Bedarf Überstunden zu leisten oder flexibel auf kurzfristige Anforderungen zu reagieren",
      ],
    },
  },
  {
    id: "controller",
    title: "Qualitätskontrolleur/in",
    type: "Vollzeit",
    image: Job2,
    details: {
      reportsTo: "Firma Administration",
      responsibilities: [
        "Durchführung von Wareneingangs-, Inprozess- und Endkontrollen",
        "Überprüfung der Einhaltung von Qualitätsstandards und -richtlinien",
        "Dokumentation und Auswertung von Messergebnissen und Prüfdaten",
        "Erkennen und Melden von Abweichungen sowie Einleitung von Korrekturmaßnahmen",
        "Mitwirkung bei der Ursachenanalyse und kontinuierlichen Verbesserung",
        "Zusammenarbeit mit Produktion, Technik und Qualitätsmanagement",
        "Schulung von Mitarbeitenden in qualitätsrelevanten Themen",
        "Durchführung von Mitarbeitereinsatz- und Arbeitszeitplänen",
      ],
      requirements: [
        "Erfahrung in der Qualitätskontrolle oder Qualitätssicherung von Vorteil",
        "Hohes Qualitätsbewusstsein, Genauigkeit und Verantwortungsbewusstsein",
        "Teamfähigkeit, Kommunikationsstärke und Durchsetzungsvermögen",
        "Gute Englisch- und Deutschkenntnisse in Wort und Schrift",
        "Führerschein",
      ],
    },
  },
  {
    id: "reinigungskraft",
    title: "Reinigungskraft (m/w/d)",
    type: "Teilzeit / Vollzeit",
    image: Job3,
    details: {
      reportsTo: "Teamleitung",
      responsibilities: [
        "Reinigung im privaten und gewerblichen Bereich",
        "Einhaltung der Reinigungsstandards und -vorschriften",
        "Teilnahme an Seminaren und Schulungen des Unternehmens",
        "Einhaltung von Aufgaben und Plänen in den Einrichtungen",
      ],
      requirements: [
        "Berufserfahrung ist wünschenswert, aber nicht erforderlich",
        "Sprachkenntnisse auf dem Niveau von A2 und höher",
        "Arbeitserlaubnis und Aufenthaltsgenehmigung",
        "Bereitschaft und Fähigkeit, in Teilzeit oder Vollzeit zu arbeiten",
      ],
    },
  },
];

export default jobData;
