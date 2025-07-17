const services = [
  {
    icon: "FaCouch",
    label: "Reinigung von Polstermöbeln",
    title: "Reinigung von Polstermöbeln",
    subtitle: "(Sofas, Sessel, Stühle, Hocker, Matratzen, Kopfteile)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Reinigung vor Ort mit professionellen Geräten und Reinigungsmitteln.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Tiefenreinigung",
          "Entfernt Schmutz, Flecken und Gerüche",
          "Desinfektion",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Entfernt selbst hartnäckige Flecken",
          "Sichere, farbschonende Reinigungsmittel ohne stechenden Geruch",
          "Schnelle Durchführung",
          "Saug- und Trocknungsfunktion",
        ],
      },
      {
        heading: "Entfernte Verunreinigungen",
        list: [
          "Schweiß, Fett, Speichel, Urin",
          "Getränke-/Essensflecken, Schmutz, Staub",
          "Haare, Wolle, Mikroorganismen (Milben)",
        ],
      },
      {
        heading: "Kosten beinhalten",
        list: [
          "Besuch eines Spezialisten",
          "Lieferung der Ausrüstung",
          "Reinigungsarbeiten",
          "Desinfektion",
        ],
      },
    ],
  },
  {
    icon: "FaBroomBall",
    label: "Reinigung von Teppichen",
    title: "Reinigung von Teppichen",
    subtitle: "(Teppiche aller Art: Hochflor, Kurzflor, Orientteppiche usw.)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Professionelle Teppichreinigung mit umweltfreundlichen Reinigungsmitteln und Geräten vor Ort oder in der Reinigungsstation.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Farbauffrischung",
          "Entfernung von Gerüchen und Flecken",
          "Hygienische Sauberkeit",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Schonende Behandlung für empfindliche Fasern",
          "Effektive Fleckenentfernung",
          "Allergikerfreundlich",
          "Verlängerte Lebensdauer des Teppichs",
        ],
      },
      {
        heading: "Geeignet für",
        list: [
          "Haushalte mit Kindern oder Haustieren",
          "Stark frequentierte Räume",
          "Teppiche mit sichtbaren Verschmutzungen oder Gerüchen",
        ],
      },
      {
        heading: "Kosten beinhalten",
        list: [
          "Abholung und Lieferung (bei Bedarf)",
          "Reinigung und Trocknung",
          "Fleckenbehandlung",
          "Geruchsneutralisierung",
        ],
      },
    ],
  },
  {
    icon: "FaWindowMaximize",
    label: "Fensterreinigung",
    title: "Fensterreinigung",
    subtitle:
      "(Innen- und Außenreinigung von Fenstern, Glasfassaden, Wintergärten)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Professionelle Reinigung von Glasflächen mit Spezialwerkzeugen und -mitteln für streifenfreien Glanz.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Klare, glänzende Fenster",
          "Keine Schlieren oder Wasserflecken",
          "Verbesserte Lichtverhältnisse in den Räumen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Sicheres Arbeiten auch in großer Höhe",
          "Umweltfreundliche Reinigungsmittel",
          "Sorgfältige Reinigung von Fensterrahmen und -bänken",
          "Schnell und gründlich",
        ],
      },
      {
        heading: "Geeignet für",
        list: [
          "Privatwohnungen",
          "Büros und Geschäftsräume",
          "Wintergärten und Glaskonstruktionen",
        ],
      },
      {
        heading: "Kosten beinhalten",
        list: [
          "Anfahrt und Vorbereitung",
          "Reinigung der Glasflächen innen und außen",
          "Rahmen- und Fensterbankreinigung",
          "Material und Ausrüstung",
        ],
      },
    ],
  },
  {
    icon: "FaSoap",
    label: "Allgemeine Reinigung der Küche",
    title: "Allgemeine Reinigung der Küche",
    subtitle: "(Oberflächen, Geräte, Schränke – außen & innen)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche Reinigung aller Küchenflächen – einschließlich Arbeitsflächen, Schränken, Geräten (außen & innen) sowie Fliesen.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Fett, Kalk und Essensreste werden entfernt",
          "Hygienisch saubere Küche",
          "Frischer Duft und gepflegtes Aussehen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Professionelle Reinigungsmittel und Ausrüstung",
          "Schonend für empfindliche Oberflächen",
          "Zeitersparnis für Sie",
        ],
      },
      {
        heading: "Zusätzliche Leistungen",
        list: [
          "Innenreinigung von Kühlschrank, Backofen und Mikrowelle",
          "Entkalkung von Armaturen",
          "Reinigung der Fliesenfugen",
        ],
      },
    ],
  },
  {
    icon: "FaTshirt",
    label: "Waschen und Bügeln von Wäsche",
    title: "Waschen und Bügeln von Wäsche",
    subtitle: "(Alltagskleidung, Bettwäsche, Handtücher usw.)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Professionelles Waschen und sorgfältiges Bügeln Ihrer Wäsche – ganz nach Ihren Wünschen. Nutzung hochwertiger Waschmittel und Dampfbügeleisen.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Frisch gewaschene, glatte und gepflegte Kleidung",
          "Schonende Behandlung auch empfindlicher Stoffe",
          "Sofort bereit zum Tragen oder Verstauen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Zeitersparnis für Sie",
          "Professionelle Ausrüstung und Technik",
          "Hygienisch saubere und faltenfreie Wäsche",
        ],
      },
      {
        heading: "Hinweis",
        list: [
          "Trennung nach Stoffart und Farbe",
          "Individuelle Temperatureinstellungen beim Waschen und Bügeln",
          "Auch für große Mengen geeignet",
        ],
      },
    ],
  },
  {
    icon: "FaRecycle",
    label: "Unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    subtitle: "(Regelmäßige Reinigung für gleichbleibende Sauberkeit)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Die Unterhaltsreinigung umfasst regelmäßig wiederkehrende Reinigungsarbeiten in Wohn- und Arbeitsbereichen. Sie wird individuell nach Kundenwunsch geplant und durchgeführt.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Stetige Sauberkeit und Hygiene",
          "Gepflegtes Erscheinungsbild Ihrer Räume",
          "Vermeidung von hartnäckigem Schmutz",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Flexible Terminplanung (täglich, wöchentlich, monatlich)",
          "Individuell abgestimmte Reinigungspläne",
          "Gleichbleibend hoher Reinigungsstandard",
          "Schonung von Oberflächen durch regelmäßige Pflege",
        ],
      },
      {
        heading: "Leistungsumfang (nach Bedarf)",
        list: [
          "Staubsaugen und Wischen der Böden",
          "Abwischen von Oberflächen",
          "Müllentsorgung",
          "Küchen- und Badreinigung",
        ],
      },
    ],
  },
  {
    icon: "FaPaintRoller",
    label: "Reinigung nach Renovierungsarbeiten",
    title: "Reinigung nach Renovierungsarbeiten",
    subtitle:
      "(Gründliche Entfernung von Bauschmutz nach Umbau oder Sanierung)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Nach Renovierungs- oder Bauarbeiten entfernen wir Staub, Farb- und Klebereste sowie grobe Verschmutzungen. Der Service erfolgt durch ein professionelles Team und wird je nach Objekt individuell geplant.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Staubfreie und saubere Räume",
          "Frei von Bauschmutz und Rückständen",
          "Bereit zur Nutzung oder zum Einzug",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Gründliche Reinigung auch an schwer erreichbaren Stellen",
          "Entfernung hartnäckiger Bauverschmutzungen",
          "Einsatz von Spezialgeräten und -mitteln",
          "Kostenlose Vorab-Besichtigung bei Bedarf",
        ],
      },
      {
        heading: "Leistungsumfang",
        list: [
          "Entfernung von Bauschutt und Müll",
          "Abziehen von Folien und Schutzabdeckungen",
          "Reinigung von Wänden, Decken, Fußleisten",
          "Fenster-, Spiegel- und Glasreinigung",
          "Tiefenreinigung der Böden und Fugen",
          "Entfernung von Kleber-, Putz- und Farbresten",
        ],
      },
    ],
  },
  {
    icon: "FaFire",
    label: "Reinigung einer Wohnung nach einem Brand",
    title: "Reinigung einer Wohnung nach einem Brand",
    subtitle:
      "(Professionelle Reinigung und Geruchsentfernung nach Brandschäden)",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Nach einem Brand ist eine gründliche Reinigung erforderlich, um Ruß, Rauchgeruch, beschädigte Materialien und giftige Rückstände zu beseitigen. Wir kümmern uns um eine sichere und fachgerechte Reinigung der betroffenen Bereiche.",
      },
      {
        heading: "Das Ergebnis",
        list: [
          "Entfernung von Brandrückständen",
          "Neutralisierung unangenehmer Gerüche",
          "Wiederherstellung bewohnbarer Räume",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Einsatz von Spezialmitteln zur Geruchsbeseitigung",
          "Schonende und gründliche Reinigung betroffener Flächen",
          "Sichere Entfernung toxischer Rückstände",
          "Erfahrenes Team für Notfallsituationen",
        ],
      },
      {
        heading: "Leistungsumfang",
        list: [
          "Entfernung von Ruß an Wänden, Decken und Möbeln",
          "Reinigung von Fußböden und Oberflächen",
          "Desinfektion betroffener Bereiche",
          "Neutralisation von Brand- und Rauchgerüchen",
          "Fachgerechte Entsorgung unbrauchbarer Gegenstände",
        ],
      },
    ],
  },
];

export default services;
