export const headerData = {
  logo: "/assets/img/header/logo.svg",
};

export const navData = {
  items: [
    { path: "/", name: "Accueil" },
    { path: "/", name: "A propos" },
    { path: "/", name: "Projets" },
    { path: "/", name: "Contact" },
    { path: "/sign-in", name: "Connexion" },
  ],
};

export const sideBarData = [
  {
    name: "Accueil",
    path: "/dashboard",
    icon: "/assets/img/icons/film.svg",
  },
  {
    name: "Ajouter un projet",
    path: "/dashboard/post/add/page",
    icon: "/assets/img/icons/video.svg",
  },
  {
    name: "Modifier le projet",
    path: "/dashboard/post/update/page",
    icon: "/assets/img/icons/clapperboard.svg",
  },
];

export const socialData = [
  { href: "/", icon: "/assets/img/icons/instagram.svg" },
  { href: "/", icon: "/assets/img/icons/linkedin.svg" },
];

export const heroData = {
  title: "Thomas Delangle",
  subtitle:
    "Une fusion artistique et technique captivante, où chaque projet raconte une histoire immersive avec des montages fluides et une attention aux détails.",
  btnText: "Télécharger mon CV",
};

export const aboutData = {
  title: "Mon histoire:",
  subtitle1:
    "Je suis passionné par l'art de donner vie aux images à travers la post-production vidéo. Mon parcours est marqué par une exploration constante des possibilités offertes par les logiciels Adobe Premiere Pro et After Effects.",
  subtitle2:
    "Mon objectif principal est d'élargir mes compétences et de perfectionner mon art à travers une opportunité de stage dans le domaine de la post-production. Chaque projet sur lequel j'ai travaillé jusqu'à présent a été une source d'apprentissage et de croissance, et je suis convaincu que le mentorat et l'expérience pratique offerts par un stage me permettront de continuer à évoluer en tant que professionnel.",
  btnText: "En savoir plus",
};

export const ProjectsData = {
  title: "Mes projets",
  btnText: "Voir les projets",
  play: "/assets/img/icons/play.svg",
  images: [
    {
      src: "/assets/img/gallery/audi.jpg",
      name: "Audi",
      category: "Première Pro",

      // video: "/assets/video/PPRO/1.mp4",
    },
    {
      src: "/assets/img/gallery/coffre.jpg",
      name: "Coffre et Cartes",
      category: "After Effect",

      // video: "/assets/video/AE/2.mp4",
    },
    {
      src: "/assets/img/gallery/main.jpg",
      name: "Main",
      category: "After Effect",

      // video: "/assets/video/AE/3.mp4",
    },
    {
      src: "/assets/img/gallery/true.jpg",
      name: "True Detective",
      category: "After Effect",

      // video: "/assets/video/AE/4.mp4",
    },
    {
      src: "/assets/img/gallery/garage.jpg",
      name: "Pub garage",
      category: "Première Pro",

      // video: "/assets/video/PPRO/5.mp4",
    },
    {
      src: "/assets/img/gallery/amour.jpg",
      name: "VF amour pas simple",
      category: "Première Pro",

      // video: "/assets/video/PPRO/6.mp4",
    },
    {
      src: "/assets/img/gallery/montre.jpg",
      name: "Montre",
      category: "Première Pro",

      // video: "/assets/video/PPRO/7.mp4",
    },
    {
      src: "/assets/img/gallery/vans.jpg",
      name: "Pub Van",
      category: "Première Pro",

      // video: "/assets/video/PPRO/8.mp4",
    },
  ],
};

export const interviewData = {
  title:
    "“Bienvenue dans ma quête incessante de créativité et d'innovation dans le domaine de la post-production vidéo.”",
  btnText: "Regarder maintenant",
};

export const contactData = {
  title: "Contactez-moi",
  info: [
    {
      title: "N'hésitez pas !",
      subtitle:
        "Si vous voulez discuter d'opportunités de stage, de collaboration ou tout autre projet créatif. Je suis impatient d'échanger avec vous !",
      address: {
        name: "28 route Mauny, Limoges-Fourches, 77550",
      },
      phone: {
        number: "06 95 32 57 14",
      },
      email: {
        address: "thom.delangle@gmail.com",
      },
    },
  ],
  form: {
    name: "Votre nom et prénom",
    email: "Votre adresse mail",
    message: "Votre message",
    btnText: "Envoyer",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const footerData = {
  about: {
    title: "Thomas Delangle",
    subtitle:
      "Dans un monde où chaque pixel compte, je suis passionné par l'art de transformer des visions en réalité",
    address: {
      name: "28 route Mauny, Limoges-Fourches, 77550",
    },
    phone: {
      number: "06 95 32 57 14",
    },
    email: {
      address: "thom.delangle@gmail.com",
    },
  },
  links: {
    title: "Site internet",
    items: [
      { href: "/", name: "Accueil" },
      { href: "/", name: "A propos" },
      { href: "/", name: "Projets" },
      { href: "/", name: "Contact" },
    ],
  },
  program: {
    title: "Mes disponibilités",
    items: [
      { name: "Lundi - Mardi: 10h-17h " },
      { name: "Mercredi - Vendredi: 13h-18h " },
    ],
  },
};
