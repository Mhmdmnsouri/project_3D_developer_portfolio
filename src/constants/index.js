import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  vuejs,
  nuxt,
  yarn,
  npm,
  postman,
  axios,
  github,
  gitlab,
  pinia,
  sass,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Crypto Trader",
    icon: mobile,
  },
  {
    title: "UI / UX designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Npm",
    icon: npm,
  },
  {
    name: "Yarn",
    icon: yarn,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Python Couch",
    company_name: "Yasan Academy",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023 ( 5 months )",
    points: [
      "Teaching introductory to intermediate Python language.",
      "Holding one-on-one and group meetings on programming and modern technologies.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Webishow",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023 ( 1 yrs )",
    points: [
      "development of the ui design of the pardehStore shop project which was used online for suitable events to sell the product.",
      "Implementing two panel management(CRM) for personel and client CC platform (Api base).",
      "development of the Webishow's Bio for survey and marketing from clients.",
      "Writing plugins for wordpress.",
      "Refactor old project's code and clean up.",
      "Testing and troubleshooting platforms in terms of functionality and appearance.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Arnika Mehr Kish",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2024 - present",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies such as Nuxt, Tailwind, Nuxt Ui, Vuetify, Daisy Ui, etc...",
      "Collaborating with cross-functional teams including designers, backend developers, and others to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "development of the hotel agency's platform that provided users with price and capacity inquiries along with room reservations (Api base)",
      "development of the panel management(CRM) for ArnikaMehrKish's accounting (local personel CRM).",
      "Implementing panel management(CRM) for Bootimar (Airplane CRM).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
