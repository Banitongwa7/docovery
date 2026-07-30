import { contact } from "@/lib/site";

/**
 * Legal copy, carried over verbatim from the previous site and restructured as
 * data so both documents share one renderer and get a table of contents.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  id: string;
  index: string;
  title: string;
  blocks: LegalBlock[];
};

export const privacyIntro =
  "Chez Docovery, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez nos services.";

export const privacySections: LegalSection[] = [
  {
    id: "informations-collectees",
    index: "01",
    title: "Informations collectées",
    blocks: [
      { type: "p", text: "Nous collectons les types d'informations suivants :" },
      {
        type: "ul",
        items: [
          "Informations d'identification : nom, adresse email, numéro de téléphone",
          "Informations professionnelles : entreprise, poste, secteur d'activité",
          "Données de navigation : adresse IP, type de navigateur, pages visitées",
          "Communications : messages envoyés via nos formulaires de contact",
        ],
      },
    ],
  },
  {
    id: "utilisation-des-donnees",
    index: "02",
    title: "Utilisation des données",
    blocks: [
      { type: "p", text: "Nous utilisons vos données pour :" },
      {
        type: "ul",
        items: [
          "Répondre à vos demandes de contact et de devis",
          "Vous envoyer notre newsletter (avec votre consentement)",
          "Améliorer nos services et votre expérience utilisateur",
          "Analyser l'utilisation de notre site web",
          "Respecter nos obligations légales",
        ],
      },
    ],
  },
  {
    id: "cookies",
    index: "03",
    title: "Cookies et technologies similaires",
    blocks: [
      { type: "p", text: "Nous utilisons des cookies pour :" },
      {
        type: "ul",
        items: [
          "Mémoriser vos préférences",
          "Analyser le trafic du site",
          "Améliorer la performance du site",
        ],
      },
      {
        type: "p",
        text: "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités.",
      },
    ],
  },
  {
    id: "partage-des-donnees",
    index: "04",
    title: "Partage des données",
    blocks: [
      {
        type: "p",
        text: "Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :",
      },
      {
        type: "ul",
        items: [
          "Nos prestataires de services (hébergement, analytics)",
          "Les autorités légales si requis par la loi",
        ],
      },
    ],
  },
  {
    id: "securite-des-donnees",
    index: "05",
    title: "Sécurité des données",
    blocks: [
      {
        type: "p",
        text: "Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.",
      },
    ],
  },
  {
    id: "vos-droits",
    index: "06",
    title: "Vos droits",
    blocks: [
      {
        type: "p",
        text: "Conformément au RGPD et aux lois locales, vous avez le droit de :",
      },
      {
        type: "ul",
        items: [
          "Accéder à vos données personnelles",
          "Rectifier vos données",
          "Supprimer vos données",
          "Vous opposer au traitement",
          "Retirer votre consentement",
          "Demander la portabilité de vos données",
        ],
      },
      {
        type: "p",
        text: `Pour exercer vos droits, contactez-nous à : ${contact.email}`,
      },
    ],
  },
  {
    id: "duree-de-conservation",
    index: "07",
    title: "Durée de conservation",
    blocks: [
      {
        type: "p",
        text: "Nous conservons vos données uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales.",
      },
    ],
  },
  {
    id: "modifications",
    index: "08",
    title: "Modifications de cette politique",
    blocks: [
      {
        type: "p",
        text: "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.",
      },
    ],
  },
];

export const termsIntro =
  "Bienvenue sur le site web de Docovery. En accédant et en utilisant ce site, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.";

export const termsSections: LegalSection[] = [
  {
    id: "acceptation",
    index: "01",
    title: "Acceptation des conditions",
    blocks: [
      {
        type: "p",
        text: "En utilisant nos services, vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions d'utilisation ainsi que par notre politique de confidentialité.",
      },
      {
        type: "p",
        text: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur immédiatement après leur publication sur le site.",
      },
    ],
  },
  {
    id: "description-des-services",
    index: "02",
    title: "Description des services",
    blocks: [
      { type: "p", text: "Docovery fournit les services suivants :" },
      {
        type: "ul",
        items: [
          "Développement d'applications web et mobiles sur mesure",
          "Conseil en architecture logicielle",
          "Intégration de solutions cloud",
          "Services de maintenance et support technique",
          "Formation et accompagnement",
        ],
      },
    ],
  },
  {
    id: "obligations-utilisateur",
    index: "03",
    title: "Obligations de l'utilisateur",
    blocks: [
      { type: "p", text: "En utilisant nos services, vous vous engagez à :" },
      {
        type: "ul",
        items: [
          "Fournir des informations exactes et à jour",
          "Maintenir la confidentialité de vos identifiants de connexion",
          "Utiliser les services de manière légale et éthique",
          "Ne pas tenter d'accéder de manière non autorisée à nos systèmes",
          "Respecter les droits de propriété intellectuelle",
        ],
      },
    ],
  },
  {
    id: "utilisations-interdites",
    index: "04",
    title: "Utilisations interdites",
    blocks: [
      { type: "p", text: "Vous vous engagez à ne pas :" },
      {
        type: "ul",
        items: [
          "Violer les lois ou réglementations applicables",
          "Transmettre du contenu illégal, nuisible ou offensant",
          "Utiliser nos services pour du spam ou du phishing",
          "Tenter de décompiler ou de reverse-engineer nos applications",
          "Interférer avec le fonctionnement de nos services",
          "Collecter des informations sur d'autres utilisateurs sans consentement",
        ],
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    index: "05",
    title: "Propriété intellectuelle",
    blocks: [
      {
        type: "p",
        text: "Tous les contenus présents sur ce site (textes, images, logos, code source, etc.) sont la propriété exclusive de Docovery ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle.",
      },
      {
        type: "p",
        text: "Toute reproduction, distribution ou utilisation non autorisée de ces contenus est strictement interdite.",
      },
    ],
  },
  {
    id: "tarification",
    index: "06",
    title: "Tarification et paiement",
    blocks: [
      {
        type: "p",
        text: "Les prix de nos services sont indiqués en devise locale et sont sujets à modification sans préavis. Les devis sont valables pour une durée limitée spécifiée.",
      },
      {
        type: "p",
        text: "Les modalités de paiement seront définies dans les contrats individuels :",
      },
      {
        type: "ul",
        items: [
          "Paiement par virement bancaire",
          "Modalités d'acompte et de paiement final selon le projet",
          "Facturation selon le calendrier convenu",
        ],
      },
    ],
  },
  {
    id: "limitation-de-responsabilite",
    index: "07",
    title: "Limitation de responsabilité",
    blocks: [
      {
        type: "p",
        text: "Docovery s'efforce de fournir des services de qualité mais ne peut garantir :",
      },
      {
        type: "ul",
        items: [
          "Un fonctionnement ininterrompu des services",
          "L'absence totale d'erreurs ou de bugs",
          "L'exactitude complète des informations fournies",
        ],
      },
      {
        type: "p",
        text: "En aucun cas, Docovery ne sera responsable des dommages indirects, consécutifs ou spéciaux résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.",
      },
    ],
  },
  {
    id: "garanties",
    index: "08",
    title: "Garanties",
    blocks: [
      {
        type: "p",
        text: "Pour les projets de développement, nous offrons une période de garantie définie dans le contrat pour corriger les bugs et dysfonctionnements. Cette garantie ne couvre pas :",
      },
      {
        type: "ul",
        items: [
          "Les modifications demandées après livraison",
          "Les problèmes causés par des modifications tierces",
          "L'utilisation non conforme du logiciel",
        ],
      },
    ],
  },
  {
    id: "resiliation",
    index: "09",
    title: "Résiliation",
    blocks: [
      {
        type: "p",
        text: "Nous nous réservons le droit de suspendre ou de résilier votre accès à nos services en cas de violation de ces conditions d'utilisation.",
      },
      {
        type: "p",
        text: "Les clients peuvent résilier leurs contrats de service selon les modalités définies dans les accords individuels.",
      },
    ],
  },
  {
    id: "droit-applicable",
    index: "10",
    title: "Droit applicable et juridiction",
    blocks: [
      {
        type: "p",
        text: "Ces conditions d'utilisation sont régies par les lois de la République Démocratique du Congo. Tout litige sera soumis à la juridiction exclusive des tribunaux de Kinshasa.",
      },
    ],
  },
  {
    id: "contact",
    index: "11",
    title: "Contact",
    blocks: [
      {
        type: "p",
        text: "Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter :",
      },
      {
        type: "ul",
        items: [
          `Email : ${contact.email}`,
          `Téléphone : ${contact.phone.label}`,
          `Adresse : ${contact.office.label}`,
        ],
      },
    ],
  },
];
