import Büros from "../Images/Büros.png";
import Treppenhäuser from "../Images/Treppenhäuser.png";
import Einkaufsbereiche from "../Images/Einkaufsbereiche.png";
import Industriebauten from "../Images/Industriebauten.png";
import Schulen from "../Images/Schulen.png";
import Hotels from "../Images/Hotels.png";
import Cafés from "../Images/Cafés.png";
import Sporthallen from "../Images/Sporthallen.png";

import Wohnung from "../Images/Wohnung.png";
import Haus from "../Images/Haus.png";
import Renovierung from "../Images/Renovierung.png";
import Feierlichkeiten from "../Images/Feierlichkeiten.png";
import Umzug from "../Images/Umzug.png";
import Balkon from "../Images/Balkon.png";
import Wohnungsverkauf from "../Images/Wohnungsverkauf.png";
import PrTreppenhäuser from "../Images/PrTreppenhäuser.png";

const serviceListData = [
  {
    title: "Büroreinigung",
    category: "business",
    price: "ab 26€",
    image: Büros,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Professionelle Reinigungsdienstleistungen, die auf die Aufrechterhaltung von Sauberkeit, Ordnung und Hygiene in Bürogebäuden ausgerichtet sind – mit dem Ziel, eine komfortable und sichere Arbeitsumgebung für Mitarbeitende, Kunden und Geschäftspartner zu gewährleisten.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Basisreinigung – ausgewählte Oberflächen von außen",
          "Regelmäßige Reinigung – alle Oberflächen von außen, 1–2 Mal pro Woche",
          "Grundreinigung – alle Oberflächen von außen und innen, 1 Mal pro Quartal",
          "* Grundreinigung umfasst zusätzliche Leistungen laut Tabelle",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Fragebogen oder Fotos der Räumlichkeiten",
          "Kostenloser Vor-Ort-Termin zur Besichtigung",
        ],
      },
      {
        heading: "Vertrag",
        list: ["Frequenz der Besuche", "Umfang der Arbeiten"],
      },
      {
        heading: "Arbeitszeiten",
        content:
          "Das Reinigungspersonal kommt vor oder nach dem Büroalltag. Die Dauer wird individuell berechnet.",
      },
      {
        heading: "Reinigungsmittel",
        content: "Alle Reinigungsmittel und Geräte werden von uns mitgebracht.",
      },
      {
        heading: "Rabatte",
        list: [
          "Rabatt für Stammkunden",
          "Rabatt bei vorhandenen Geräten (z. B. Staubsauger)",
          "20 % Rabatt auf Geschenkgutschein zu besonderen Anlässen",
        ],
      },
      {
        heading: "Bestellmöglichkeiten",
        list: ["Über unsere Website", "Per Telefon", "Per E-Mail"],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Fläche und Umfang der Reinigung",
          "Verschmutzungsgrad, chemische Spezialbehandlung",
          "Häufigkeit der Reinigung",
          "Anzahl des Personals, Geräteeinsatz",
          "Entfernung",
          "Zuschlag bei Express- oder Wochenendterminen",
        ],
      },
    ],
  },
  {
    title: "Treppenhausreinigung",
    category: "business",
    price: "ab 28€",
    image: Treppenhäuser,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Eine saubere Treppe ist die Visitenkarte eines Hauses – egal ob privat oder geschäftlich. Unsere Treppenhausreinigung sorgt für ein gepflegtes Erscheinungsbild und hygienische Sicherheit.",
      },
      {
        heading: "Leistungsumfang",
        list: [
          "Trocken- und Nassreinigung aller Etagen",
          "Reinigung von Geländern, Handläufen, Türrahmen und Fensterbänken",
          "Fensterreinigung im Treppenhausbereich",
          "Entfernung von Spinnweben, Staub und Schmutz in Ecken",
          "Pflege von Fußmatten und Treppenläufern",
        ],
      },
      {
        heading: "Empfohlene Häufigkeit",
        list: [
          "Einmal pro Woche bei normalem Gebrauch",
          "Zweimal wöchentlich bei stark frequentierten Eingängen",
        ],
      },
      {
        heading: "Warum mit uns?",
        list: [
          "Zuverlässige und pünktliche Reinigungskräfte",
          "Umweltschonende und effektive Reinigungsmittel",
          "Auf Wunsch auch Wochenendtermine möglich",
        ],
      },
      {
        heading: "Bestellmöglichkeiten",
        list: [
          "Telefonisch oder per E-Mail",
          "Online über unsere Website",
          "Regelmäßiger Reinigungsvertrag oder Einmalservice",
        ],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Abhängig von Etagenanzahl, Größe und Verschmutzungsgrad",
          "Pauschalpreise für regelmäßige Verträge",
        ],
      },
    ],
  },
  {
    title: "Reinigung von Einkaufsbereichen",
    category: "business",
    price: "ab 28€",
    image: Einkaufsbereiche,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche Reinigung von Einkaufszentren, Boutiquen und Ladenflächen mit Fokus auf Sauberkeit, Hygiene und Kundenkomfort. Unser Ziel ist es, Ihren Kunden ein angenehmes Einkaufserlebnis zu bieten.",
      },
      {
        heading: "Leistungsumfang",
        list: [
          "Reinigung der Böden – Saugen, Wischen und ggf. Polieren",
          "Reinigung von Schaufenstern und Glastüren",
          "Abwischen von Regalen, Theken, Kassenbereichen",
          "Entleerung der Mülleimer und Desinfektion von Kontaktflächen",
          "Pflege von Sanitärbereichen (falls vorhanden)",
        ],
      },
      {
        heading: "Empfohlene Häufigkeit",
        list: [
          "Täglich oder mehrmals pro Woche – je nach Besucherfrequenz",
          "Intensivreinigung außerhalb der Öffnungszeiten",
        ],
      },
      {
        heading: "Vorteile für Ihr Geschäft",
        list: [
          "Professioneller Eindruck für Kunden",
          "Mehr Sicherheit und Hygiene im Verkaufsraum",
          "Flexible Einsatzzeiten: frühmorgens, abends oder nachts",
        ],
      },
      {
        heading: "Zusätzliche Leistungen (optional)",
        list: [
          "Schaufensterreinigung von außen",
          "Tiefenreinigung bei Umbau oder saisonalem Wechsel",
          "Geruchsneutralisierung",
        ],
      },
      {
        heading: "Hinweis zur Preisgestaltung",
        list: [
          "Der Preis hängt von der Fläche, der Frequenz und dem Verschmutzungsgrad ab",
          "Individuelle Angebote nach Vor-Ort-Besichtigung möglich",
        ],
      },
    ],
  },
  {
    title: "Reinigung von Industriebauten",
    category: "business",
    price: "ab 30€",
    image: Industriebauten,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Spezialisierte Reinigung von Produktionshallen, Werkstätten, Lagern und Industrieanlagen. Wir sorgen für Sicherheit, Hygiene und Einhaltung branchenspezifischer Vorschriften.",
      },
      {
        heading: "Leistungsumfang",
        list: [
          "Bodenreinigung: Staubsaugen, Nasswischen, Entfernung von Öl- und Gummispuren",
          "Reinigung von Maschinenumgebungen (außen), Wänden und Decken",
          "Entfernung von Industrie- und Baustaub",
          "Müllentsorgung, Reinigung von Aufenthaltsräumen und sanitären Anlagen",
          "Desinfektion stark frequentierter Zonen",
        ],
      },
      {
        heading: "Wann empfohlen?",
        list: [
          "Regelmäßig – für laufende Produktion und Sicherheit",
          "Nach Umbau, Montage oder Reparaturarbeiten",
          "Bei Jahreswechsel, Kontrolle oder Zertifizierung",
        ],
      },
      {
        heading: "Warum uns wählen?",
        list: [
          "Erfahrenes Team mit Zugang zu Spezialausrüstung",
          "Kenntnisse industrieller Sicherheitsvorschriften",
          "Effiziente Reinigung ohne Betriebsunterbrechung",
        ],
      },
      {
        heading: "Individuelle Planung",
        content:
          "Wir analysieren gemeinsam mit Ihnen die Anforderungen Ihrer Produktionsstätte und erstellen ein maßgeschneidertes Reinigungskonzept – auch außerhalb der Produktionszeiten.",
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Abhängig von Fläche, Verschmutzung, Maschinenpark",
          "Kombinierbar mit Grundreinigung oder Sonderleistungen",
        ],
      },
    ],
  },
  {
    title: "Reinigung von Schulen & Kitas",
    category: "business",
    price: "ab 28€",
    image: Schulen,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche und hygienische Reinigung von Bildungseinrichtungen – speziell angepasst an den Alltag in Schulen, Kindergärten und Kitas. Der Fokus liegt auf Sauberkeit, Gesundheit und Sicherheit der Kinder und des Personals.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Böden (Teppich, Linoleum, Fliesen): Staubsaugen, Wischen, Desinfektion",
          "Tische, Stühle, Spielbereiche",
          "Sanitärbereiche: WC, Waschbecken, Wickelräume",
          "Fensterbänke, Heizkörper, Griffe und Schalter",
          "Lehrerzimmer, Büros und Gemeinschaftsräume",
        ],
      },
      {
        heading: "Besonderheiten",
        list: [
          "Verwendung von kindersicheren und umweltfreundlichen Reinigungsmitteln",
          "Regelmäßige Desinfektion von Kontaktflächen",
          "Reinigung nach Stundenplan oder in Randzeiten",
        ],
      },
      {
        heading: "Empfohlen",
        list: [
          "Tägliche oder mehrmals wöchentliche Reinigung während des Schulbetriebs",
          "Grundreinigung in den Ferien oder nach besonderen Anlässen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Hygienisch saubere Räume für Kinder und Personal",
          "Erfüllung aller gesetzlichen Hygienestandards",
          "Langfristige Werterhaltung von Mobiliar und Böden",
        ],
      },
      {
        heading: "Preisgestaltung",
        content:
          "Die Kosten richten sich nach Anzahl der Räume, Nutzungsfrequenz und erforderlichem Aufwand. Bei regelmäßiger Beauftragung bieten wir Sonderkonditionen für Bildungseinrichtungen.",
      },
    ],
  },
  {
    title: "Reinigung von Hotels",
    category: "business",
    price: "ab 25€",
    image: Hotels,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Professionelle Hotelreinigung zur Sicherstellung von Sauberkeit, Komfort und einem positiven Eindruck bei Ihren Gästen. Unser Service umfasst Zimmerreinigung, Reinigung der Gemeinschaftsbereiche sowie Sonderleistungen nach Wunsch.",
      },
      {
        heading: "Leistungen im Überblick",
        list: [
          "Zimmerreinigung (täglich oder nach Bedarf)",
          "Wechsel und Pflege von Bettwäsche und Handtüchern",
          "Reinigung von Badezimmern, Duschen und Toiletten",
          "Desinfektion von häufig berührten Flächen",
          "Reinigung der Lobby, Flure und Gemeinschaftsbereiche",
          "Auffrischung der Minibar, Müllentsorgung",
        ],
      },
      {
        heading: "Zusätzliche Services",
        list: [
          "Fenster- und Glasreinigung",
          "Teppich- und Polsterreinigung",
          "Frühstücksraum- und Küchenreinigung",
          "Reinigung nach Veranstaltungen oder Feiern",
        ],
      },
      {
        heading: "Warum wir?",
        list: [
          "Diskrete und geschulte Reinigungskräfte",
          "Reinigung nach individuellen Zeitplänen",
          "Verwendung hochwertiger, materialschonender Reinigungsmittel",
          "Zuverlässiger Service auch bei hohem Gästeaufkommen",
        ],
      },
      {
        heading: "Preisgestaltung",
        content:
          "Die Kosten richten sich nach Zimmeranzahl, Frequenz, gewünschten Zusatzleistungen und Hotelgröße. Wir erstellen Ihnen gern ein individuelles Angebot.",
      },
    ],
  },
  {
    title: "Reinigung von Cafés & Restaurants",
    category: "business",
    price: "ab 28€",
    image: Cafés,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche Reinigung von gastronomischen Einrichtungen mit Fokus auf Hygiene, Sauberkeit und die Einhaltung aller Lebensmittelvorschriften. Unsere Leistungen verbessern das Wohlbefinden der Gäste und sorgen für ein gepflegtes Ambiente.",
      },
      {
        heading: "Was wir reinigen",
        list: [
          "Gastraum: Tische, Stühle, Bodenflächen, Fenster",
          "Thekenbereich & Servicestationen",
          "Sanitäranlagen für Gäste und Personal",
          "Küche: Arbeitsflächen, Geräte, Dunstabzugshauben",
          "Lagerräume und Kühlzellen",
          "Entfernung von Fett, Kalk und anderen Rückständen",
        ],
      },
      {
        heading: "Zeit und Häufigkeit",
        content:
          "Die Reinigung kann täglich, wöchentlich oder nach individuellem Bedarf erfolgen – auch nachts oder an Feiertagen, um Ihren Betrieb nicht zu stören.",
      },
      {
        heading: "Vorteile unseres Services",
        list: [
          "Erfüllung aller HACCP-Vorgaben",
          "Spezialprodukte für die Gastronomie",
          "Erfahrenes Reinigungspersonal mit Blick fürs Detail",
          "Flexibilität bei Einsatzzeiten und Umfang",
        ],
      },
      {
        heading: "Kostenfaktoren",
        content:
          "Die Preise richten sich nach Fläche, Verschmutzungsgrad, Küchenausstattung und Reinigungsfrequenz. Gern erstellen wir ein individuelles Angebot nach einer kurzen Besichtigung oder einem Telefonat.",
      },
    ],
  },
  {
    title: "Reinigung von Sporthallen",
    category: "business",
    price: "ab 27€",
    image: Sporthallen,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Reinigung von Sport- und Mehrzweckhallen, Turnhallen, Fitness- und Trainingsräumen. Ziel ist die Entfernung von Schmutz, Schweißrückständen und Bakterien für eine hygienische und sichere Umgebung.",
      },
      {
        heading: "Was wir reinigen",
        list: [
          "Bodenflächen (z. B. Parkett, Gummi, Linoleum)",
          "Sportgeräte und Matten",
          "Umkleidekabinen und Duschen",
          "Sanitärbereiche und Waschräume",
          "Zuschauerbereiche (Sitzplätze, Geländer, Eingänge)",
          "Fenster und Lüftungssysteme",
        ],
      },
      {
        heading: "Reinigungsfrequenz",
        content:
          "Wir empfehlen tägliche oder mehrmals wöchentliche Reinigung – je nach Nutzungsintensität der Halle. Auch spezielle Grundreinigungen in Pausen- oder Ferienzeiten sind möglich.",
      },
      {
        heading: "Vorteile unseres Services",
        list: [
          "Rutschfeste, hygienische Bodenpflege",
          "Spezialmittel gegen Schweißrückstände und Bakterien",
          "Schonende Reinigung von Sportgeräten",
          "Pünktlich, flexibel, zuverlässig",
        ],
      },
      {
        heading: "Kostenfaktoren",
        content:
          "Preise richten sich nach Hallengröße, Reinigungsumfang und Häufigkeit. Wir erstellen gern ein individuelles Angebot auf Anfrage.",
      },
    ],
  },
  {
    title: "Zahnarztpraxen und medizinische Einrichtungen",
    category: "business",
    price: "ab 30€",
    image: "zahnarzt.jpg",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Reinigung medizinischer Einrichtungen mit besonderem Fokus auf Hygiene, Desinfektion und Sicherheit – für ein sauberes, vertrauensvolles Umfeld für Patienten und Mitarbeitende.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Tägliche Desinfektionsreinigung aller Oberflächen",
          "Regelmäßige Grundreinigung – inkl. Geräteflächen und sensibler Bereiche",
          "Spezialreinigung nach Bedarf (z. B. nach Operationen oder Eingriffen)",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Kostenloser Besichtigungstermin vor Ort",
          "Maßgeschneiderter Hygieneplan nach RKI-Vorgaben",
        ],
      },
      {
        heading: "Vertrag",
        list: ["Reinigungsfrequenz", "Spezielle Hygienestandards"],
      },
      {
        heading: "Arbeitszeiten",
        content:
          "Reinigung außerhalb der Öffnungszeiten, auch nachts und am Wochenende möglich.",
      },
      {
        heading: "Reinigungsmittel",
        content:
          "Wir verwenden zertifizierte, desinfizierende Reinigungsmittel, die für medizinische Bereiche geeignet sind.",
      },
      {
        heading: "Rabatte",
        list: [
          "Rabatt für langfristige Verträge",
          "Rabatt bei mehreren Standorten",
        ],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Größe und Ausstattung der Praxis",
          "Anzahl der Behandlungsräume",
          "Desinfektionsaufwand",
          "Häufigkeit der Reinigung",
        ],
      },
    ],
  },
  {
    title: "Wohnanlagen und große Wohnkomplexe",
    category: "business",
    price: "ab 35€",
    image: "wohnanlage.jpg",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Reinigung von Treppenhäusern, Eingangsbereichen, Aufzügen und Gemeinschaftsflächen – für gepflegte Wohnumgebungen und zufriedene Bewohner.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Regelmäßige Reinigung von Treppen und Fluren",
          "Fensterreinigung in Gemeinschaftsbereichen",
          "Jährliche Grundreinigung inklusive Wände und Leuchten",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Besichtigung und Objektanalyse",
          "Individueller Reinigungsplan",
        ],
      },
      {
        heading: "Vertrag",
        list: [
          "Hausverwaltung als Ansprechpartner",
          "Feste Uhrzeiten und Wochentage",
        ],
      },
      {
        heading: "Arbeitszeiten",
        content:
          "In der Regel werktags am Vormittag oder Abend, individuell planbar.",
      },
      {
        heading: "Reinigungsmittel",
        content:
          "Alle Materialien inklusive. Umweltfreundliche Mittel auf Wunsch.",
      },
      {
        heading: "Rabatte",
        list: ["Rabatt bei mehreren Häusern", "Rabatt für Jahresverträge"],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Größe des Objekts",
          "Anzahl der Etagen",
          "Häufigkeit der Reinigung",
        ],
      },
    ],
  },
  {
    title: "Behördliche Einrichtungen und öffentliche Gebäude",
    category: "business",
    price: "ab 28€",
    image: "behoerden.jpg",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche und diskrete Reinigung von Büros, Wartebereichen, Sanitäranlagen und Veranstaltungsräumen in Behörden und öffentlichen Gebäuden.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Regelmäßige Unterhaltsreinigung",
          "Fenster- und Bodenpflege",
          "Sonderreinigungen bei Veranstaltungen",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Sicherheitsüberprüfung der Mitarbeiter",
          "Objektbegehung und Abstimmung",
        ],
      },
      {
        heading: "Arbeitszeiten",
        content:
          "Reinigung außerhalb der Publikumszeiten, z. B. frühmorgens oder abends.",
      },
      {
        heading: "Reinigungsmittel",
        content:
          "Einsatz von geprüften Reinigungsprodukten mit Umweltzertifikat.",
      },
      {
        heading: "Rabatte",
        list: [
          "Sonderkonditionen für Kommunen",
          "Rabatt bei Langzeitverträgen",
        ],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Größe und Nutzung des Gebäudes",
          "Sicherheitsanforderungen",
          "Häufigkeit der Reinigung",
        ],
      },
    ],
  },
  {
    title: "Kultureinrichtungen, Galerien und Konzertsäle",
    category: "business",
    price: "ab 32€",
    image: "galerie.jpg",
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Spezialisierte Reinigung empfindlicher Flächen, Ausstellungsbereiche und Besuchereinrichtungen in Museen, Galerien und Veranstaltungshäusern.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Schonende Reinigung von Ausstellungsflächen",
          "Polster- und Teppichpflege in Sitzbereichen",
          "Reinigung vor/nach Veranstaltungen",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Koordination mit Kuratoren und Technik",
          "Besichtigung außerhalb der Öffnungszeiten",
        ],
      },
      {
        heading: "Vertrag",
        list: [
          "Reinigungszeiten nach Spielplan",
          "Individuelle Vereinbarungen",
        ],
      },
      {
        heading: "Arbeitszeiten",
        content: "Reinigung außerhalb der Öffnungs- oder Veranstaltungszeiten.",
      },
      {
        heading: "Reinigungsmittel",
        content:
          "Verwendung besonders schonender Mittel für empfindliche Oberflächen.",
      },
      {
        heading: "Rabatte",
        list: [
          "Rabatt bei Daueraufträgen",
          "Sonderkonditionen für öffentliche Träger",
        ],
      },
      {
        heading: "Preisgestaltung",
        list: [
          "Fläche und Art der Ausstellungen",
          "Zugänglichkeit und Schutzmaßnahmen",
          "Reinigungsfrequenz",
        ],
      },
    ],
  },
  {
    title: "Wohnung",
    category: "privat",
    price: "ab 24€",
    image: Wohnung,
    blocks: [
      {
        heading: "Beschreibung",
        content:
          "Gründliche und professionelle Reinigung von Wohnungen – für ein hygienisches, gepflegtes und komfortables Zuhause.",
      },
      {
        heading: "Reinigungsarten",
        list: [
          "Regelmäßige Reinigung – ausgewählte Oberflächen von außen (1–3 Mal pro Woche empfohlen)",
          "Grundreinigung – Reinigung aller Oberflächen von außen und innen (1–2 Mal pro Monat empfohlen)",
          "Allgemeine Reinigung – inklusive schwer zugänglicher Stellen (2–4 Mal pro Jahr empfohlen)",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Individuelle Einschätzung durch Fotos oder Vor-Ort-Termin",
          "Reinigungskraft bringt alle Reinigungsmittel und Geräte mit",
          "Arbeitszeit nach Absprache – auch abends oder am Wochenende möglich",
        ],
      },
      {
        heading: "Vertrag",
        list: [
          "Keine langfristige Bindung erforderlich",
          "Details zur Reinigungsfrequenz und zum Umfang werden festgelegt",
        ],
      },
      {
        heading: "Rabatte",
        list: [
          "Rabatte für Stammkunden",
          "Sonderrabatte bei Nutzung eigener Geräte",
          "Geburtstags-Gutschein mit 20 % Rabatt möglich",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Online auf der Webseite",
          "Per Telefon oder E-Mail",
          "Nach Anfrage senden wir ein unverbindliches Angebot",
        ],
      },
      {
        heading: "Preise abhängig von",
        list: [
          "Größe der Wohnung und Reinigungsumfang",
          "Grad der Verschmutzung",
          "Häufigkeit und Dringlichkeit der Reinigung",
          "Anzahl der Reinigungskräfte",
          "Entfernung zur Einsatzstelle",
        ],
      },
    ],
  },
  {
    title: "Haus",
    price: "ab 24€",
    image: Haus,
    category: "privat",
    blocks: [
      {
        heading: "Empfohlen",
        list: [
          "Regelmäßige Reinigung – 1–3 Mal pro Woche",
          "Grundreinigung – 1–2 Mal pro Monat",
          "Allgemeine Reinigung – 2–4 Mal pro Jahr",
          "Spezielle Reinigung – bei Bedarf (z. B. nur Küche, nur Fenster)",
        ],
      },
      {
        heading: "Prozess und Bedingungen",
        list: [
          "Individuelle Planung auf Basis Ihrer Wünsche",
          "Kostenlose Vor-Ort-Besichtigung bei Bedarf",
          "Erstellung eines maßgeschneiderten Angebots",
        ],
      },
      {
        heading: "Vertrag",
        content:
          "Wir arbeiten mit und ohne Vertrag – je nachdem, was für Sie bequemer ist. Bei regelmäßiger Reinigung bieten wir spezielle Tarife und Rabatte an.",
      },
      {
        heading: "Zeiten",
        list: [
          "Reinigung zu jeder Tageszeit möglich (auch morgens oder abends)",
          "Wochenend- und Feiertagsreinigung nach Absprache",
        ],
      },
      {
        heading: "Reinigungsmittel",
        content:
          "Wir bringen alle notwendigen Reinigungsprodukte und Geräte mit. Wenn Sie möchten, verwenden wir auch Ihre Mittel.",
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Online über unsere Webseite",
          "Telefonisch oder per E-Mail",
          "Auch über WhatsApp möglich",
        ],
      },
      {
        heading: "Rabatte",
        list: [
          "10 % für regelmäßige Kunden",
          "20 % bei Bestellung eines Geschenkgutscheins",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Größe des Hauses",
          "Verschmutzungsgrad",
          "Häufigkeit der Reinigung",
          "Spezielle Wünsche (z. B. Fensterreinigung, Dachboden usw.)",
        ],
      },
    ],
  },
  {
    title: "Nach Renovierung",
    price: "ab 32€",
    image: Renovierung,
    category: "privat",
    blocks: [
      {
        heading: "Empfohlen",
        content:
          "Unmittelbar nach Abschluss der Renovierungsarbeiten, bevor Sie in den Raum zurückkehren oder Möbel aufstellen.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Entfernung von Baustaub auf allen Oberflächen",
          "Reinigung von Fenstern, Türen, Heizkörpern",
          "Entfernung von Kleberesten, Farb- und Lackspuren",
          "Wischen von Wänden, Decken (trocken oder nass, je nach Zustand)",
          "Reinigung von Fußböden und Sockelleisten",
          "Polieren von Glas- und Spiegelflächen",
        ],
      },
      {
        heading: "Ablauf",
        list: [
          "Besichtigung vor Ort oder Fotos der Räume",
          "Erstellung eines Angebots und Terminvereinbarung",
          "Reinigungsteam mit Vorarbeiter übernimmt die Koordination",
        ],
      },
      {
        heading: "Ausstattung",
        content:
          "Unsere Teams sind mit professionellen Geräten und Reinigungsmitteln ausgestattet, die speziell für Bauschmutz geeignet sind.",
      },
      {
        heading: "Besonderheiten",
        list: [
          "Wir führen auch die Entsorgung von Verpackungsmaterialien und Bauabfällen durch",
          "Möbel werden bei Bedarf verschoben (wenn möglich)",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Telefonisch, per WhatsApp oder über unser Online-Formular",
          "Angebot erhalten Sie schnell per E-Mail",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Fläche und Zustand der Räume",
          "Menge und Art der Verschmutzung",
          "Zugänglichkeit der Oberflächen",
          "Dringlichkeit und Zeitpunkt der Reinigung (z. B. Wochenende)",
        ],
      },
    ],
  },
  {
    title: "Nach Feierlichkeiten",
    price: "ab 26€",
    image: Feierlichkeiten,
    category: "privat",
    blocks: [
      {
        heading: "Empfohlen",
        content:
          "Nach Geburtstagen, Hochzeiten, Firmenfeiern oder anderen besonderen Anlässen – wenn Sie keine Zeit oder Energie haben, selbst aufzuräumen.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Entfernung von Müll und Dekorationen",
          "Reinigung von Böden, Teppichen und Polstermöbeln",
          "Wischen von Tischen, Stühlen und anderen Flächen",
          "Geschirrspülen oder Einräumen in die Spülmaschine",
          "Reinigung von Küche und Bad, falls genutzt",
        ],
      },
      {
        heading: "Ablauf",
        list: [
          "Schnelle Terminvergabe – auch kurzfristig",
          "Angebot basierend auf Fotos oder Beschreibung",
          "Optional: Vor-Ort-Besichtigung zur besseren Einschätzung",
        ],
      },
      {
        heading: "Zusatzoptionen",
        list: [
          "Bereitstellung von Müllsäcken und Reinigungsmitteln",
          "Sonderreinigung bei hartnäckigen Flecken",
          "Entfernung von Essensresten und Gerüchen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Kein Stress nach dem Event",
          "Flexible Zeiten – auch am Abend oder Wochenende",
          "Diskrete und gründliche Reinigung durch unser Team",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Kontakt über Telefon, WhatsApp oder Website",
          "Schnelle Rückmeldung mit Preisvorschlag",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Größe des Veranstaltungsorts",
          "Menge an Müll und Verschmutzung",
          "Notwendigkeit zusätzlicher Leistungen (z. B. Fleckenentfernung)",
        ],
      },
    ],
  },
  {
    title: "Beim Umzug",
    price: "ab 26€",
    image: Umzug,
    category: "privat",
    blocks: [
      {
        heading: "Empfohlen",
        content:
          "Wenn Sie in eine neue Wohnung einziehen oder die alte übergeben müssen – wir sorgen dafür, dass alles gründlich gereinigt ist.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Komplette Reinigung der alten/neuen Wohnung",
          "Böden, Fenster, Türen, Steckdosen und Lichtschalter",
          "Küche inkl. Schränke, Arbeitsflächen, Geräte (außen und innen)",
          "Bad mit Desinfektion aller Sanitärobjekte",
          "Reinigung von Balkon, Terrasse oder Keller (falls gewünscht)",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Schneller Ein- oder Auszug ohne Stress",
          "Ideal für Wohnungsübergabe an Vermieter",
          "Zeit- und nervensparend – wir übernehmen alles",
        ],
      },
      {
        heading: "Ablauf",
        list: [
          "Kontaktaufnahme und Terminvereinbarung",
          "Kostenlose Einschätzung per Fotos oder Besichtigung",
          "Durchführung nach Zeitplan – auch am Wochenende möglich",
        ],
      },
      {
        heading: "Besonderheiten",
        list: [
          "Wir bringen alle benötigten Reinigungsmittel mit",
          "Flexible Zusatzleistungen buchbar (z. B. Polster- oder Teppichreinigung)",
          "Anpassung an Ihre Umzugslogistik",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Kontakt über unsere Website, Telefon oder E-Mail",
          "Sie erhalten ein Angebot je nach Aufwand und Zeitrahmen",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Größe und Zustand der Wohnung",
          "Anzahl der zu reinigenden Räume",
          "Zusätzliche Leistungen (z. B. Fensterreinigung, Tiefenreinigung)",
        ],
      },
    ],
  },
  {
    title: "Terrasse, Balkon & Garage",
    price: "ab 26€",
    image: Balkon,
    category: "privat",
    blocks: [
      {
        heading: "Empfohlen",
        content:
          "Für die gründliche Reinigung von Außenbereichen, die oft vernachlässigt werden – ideal für den Frühjahrsputz oder vor dem Sommer.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Bodenbeläge (Fliesen, Beton, Holz) – trocken & nass",
          "Geländer, Wände und Fensterrahmen",
          "Türen, Fenster und Lichtschalter (außen)",
          "Entfernung von Spinnweben, Blättern und Schmutz",
          "Garage: Bodenreinigung, Entfernung von Staub, Öl- und Reifenspuren",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Angenehmes Ambiente auf Balkon und Terrasse",
          "Vermeidung von Schimmel, Grünbelag und Rutschgefahr",
          "Ideal auch nach dem Winter oder bei Verkauf der Immobilie",
        ],
      },
      {
        heading: "Ablauf",
        list: [
          "Kontaktaufnahme und Terminabsprache",
          "Besichtigung oder Fotos zur Aufwandsschätzung",
          "Reinigung mit professionellen Geräten & Produkten",
        ],
      },
      {
        heading: "Besonderheiten",
        list: [
          "Umweltfreundliche Reinigungsmittel",
          "Auch schwer zugängliche Bereiche werden bearbeitet",
          "Optional: Hochdruckreinigung buchbar",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Über Website, Anruf oder E-Mail",
          "Schnelle Rückmeldung mit Preisangebot",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Größe des Bereichs (m²)",
          "Verschmutzungsgrad (z. B. Moos, Öl)",
          "Zusätzliche Sonderleistungen (z. B. Hochdruck, Entsorgung)",
        ],
      },
    ],
  },
  {
    title: "Wohnungsverkauf (Vorbereitung)",
    price: "ab 24€",
    image: Wohnungsverkauf,
    category: "privat",
    blocks: [
      {
        heading: "Ziel",
        content:
          "Ein gepflegtes Erscheinungsbild der Wohnung erhöht die Verkaufschancen und ermöglicht einen besseren Verkaufspreis.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Alle sichtbaren Oberflächen (Böden, Fenster, Türen, Möbel außen)",
          "Küche und Bad – gründlich und hygienisch",
          "Spiegel, Glasflächen, Lichtschalter, Steckdosen",
          "Fensterbänke, Heizkörper, Rahmen",
        ],
      },
      {
        heading: "Empfohlen vor",
        list: [
          "Besichtigungsterminen mit potenziellen Käufern",
          "Fotoaufnahmen für Verkaufsanzeigen",
          "Maklerterminen oder offenen Besichtigungen",
        ],
      },
      {
        heading: "Vorteile",
        list: [
          "Hinterlässt einen positiven Eindruck beim Käufer",
          "Reduziert Ablenkungen durch Schmutz oder Unordnung",
          "Betont das Potenzial der Räume",
        ],
      },
      {
        heading: "Optional",
        list: [
          "Fensterreinigung innen und außen",
          "Geruchsneutralisation",
          "Entfernung von Kalk- und Schimmelflecken",
        ],
      },
      {
        heading: "Wie bestellen?",
        list: [
          "Kontakt über Website, Telefon oder E-Mail",
          "Besichtigung oder Fotos zur Einschätzung",
          "Individuelles Angebot mit Preis und Zeitrahmen",
        ],
      },
      {
        heading: "Preisfaktoren",
        list: [
          "Größe und Zustand der Immobilie",
          "Dringlichkeit der Ausführung",
          "Zusätzliche Sonderleistungen",
        ],
      },
    ],
  },
  {
    title: "Treppenhaus",
    price: "ab 28€",
    image: PrTreppenhäuser,
    category: "privat",
    blocks: [
      {
        heading: "Warum wichtig?",
        content:
          "Das Treppenhaus ist das Erste, was Besucher sehen. Ein sauberes Treppenhaus vermittelt einen gepflegten Eindruck vom gesamten Gebäude.",
      },
      {
        heading: "Was wird gereinigt?",
        list: [
          "Treppenstufen und Podeste (trocken & nass)",
          "Geländer, Handläufe",
          "Türgriffe, Klingeln, Lichtschalter",
          "Fensterbänke, Heizkörper, Briefkästen",
          "Eingangsbereich und Außenstufen",
        ],
      },
      {
        heading: "Reinigungsfrequenz",
        list: [
          "1–2 Mal pro Woche empfohlen bei Mehrfamilienhäusern",
          "Individuell anpassbar je nach Nutzung",
        ],
      },
      {
        heading: "Zusätzliche Optionen",
        list: [
          "Fensterreinigung im Treppenhaus",
          "Reinigung von Wänden und Decken",
          "Entfernung von Spinnweben und Flecken",
        ],
      },
      {
        heading: "Vorteile unserer Dienstleistung",
        list: [
          "Zuverlässiger Zeitplan",
          "Keine Störung der Bewohner",
          "Verwendung geeigneter Reinigungsmittel für Innenräume",
        ],
      },
      {
        heading: "Bestellung & Ablauf",
        list: [
          "Kontaktaufnahme über Website, Telefon oder E-Mail",
          "Besichtigung zur Einschätzung des Reinigungsumfangs",
          "Vertrag mit festgelegtem Intervall und Preis",
        ],
      },
    ],
  },
];

export default serviceListData;
