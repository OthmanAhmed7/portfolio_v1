export const ProcessInfo = [
  {
    id: 1,
    icon: "/images/design.png",
    header: "Design",
    body: "starting from the design, We study your design to discover all the element needed and all the functionality and the animation",
  },

  {
    id: 2,
    icon: "/images/plan.png",
    header: "Plan",
    body: "After the design we make a plan that includes every thing that needs to be done from the start to finish",
  },

  {
    id: 3,
    icon: "/images/code.png",
    header: "Code",
    body: "We start coding all the design elements and the functionality needed according to the plan",
  },

  {
    id: 4,
    icon: "/images/animate.png",
    header: "Animation",
    body: "Last step is the animation that gives the website the look and feel it deserves, we use animation as needed without doing so much",
  },
];

export const skillsInfo = [
  {
    id: 1,
    name: "HTML5",
    icon: "/images/html-1.svg",
  },

  {
    id: 2,
    name: "CSS3",
    icon: "/images/css-3.svg",
  },

  {
    id: 3,
    name: "JavaScript",
    icon: "/images/logo-javascript.svg",
  },

  {
    id: 4,
    name: "React.js",
    icon: "/images/react-2.svg",
  },

  {
    id: 5,
    name: "Next.js",
    icon: "/images/next-js.svg",
  },

  {
    id: 6,
    name: "TypeScript",
    icon: "/images/typescript.svg",
  },

  {
    id: 7,
    name: "Sass",
    icon: "/images/sass-1.svg",
  },

  {
    id: 8,
    name: "Tailwind.CSS",
    icon: "/images/tailwind-css-2.svg",
  },

  {
    id: 9,
    name: "PostgresSQL",
    icon: "/images/postgresql.svg",
  },

  {
    id: 10,
    name: "SQLite3",
    icon: "/images/sqlite.svg",
  },

  {
    id: 11,
    name: "Git",
    icon: "/images/git-icon.svg",
  },

  {
    id: 12,
    name: "GitHub",
    icon: "/images/github-icon-1.svg",
  },

  {
    id: 13,
    name: "Framer Motion",
    icon: "/images/framer-motion.svg",
  },
];

export const projectInfo = [
  {
    id: 1,
    header: "Hoo Bank - A UI implementation for a bank website",
    usedTech: ["React", "Tailwind", "Figma"],
    image: "/images/hoobank.png",
    github: "https://github.com/OthmanAhmed7/hoobank",
    vercel: "https://hoobank-one-sigma.vercel.app/",
  },

  {
    id: 2,
    header: "Portfolio - A Personal Portfolio",
    usedTech: ["next", "Tailwind", "Framer"],
    image: "/images/portfolio.png",
    github: "https://github.com/OthmanAhmed7/portfolio_v1",
    vercel: "https://portfolio-v1-red-kappa.vercel.app/",
  },

  {
    id: 3,
    header: "GPT3 - A UI implementation for a GPT-3 website",
    usedTech: ["React", "CSS", "Figma"],
    image: "/images/gpt3.png",
    github: "https://github.com/OthmanAhmed7/gpt3",
    vercel: "https://gpt3-six-sigma.vercel.app/",
  },

  {
    id: 4,
    header: "Sushiman - A UI implementation for a sushi restaurant's website",
    usedTech: ["HTML", "CSS", "JavaScript"],
    image: "/images/sushiman.png",
    github: "https://github.com/OthmanAhmed7/sushiman",
    vercel: "https://sushiman-livid.vercel.app/",
  },
];

export const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    label: "Name",
    errorMessage: "Name should be 3-16 characters without special characters",
    required: true,
    pattern: "^[A-Za-z0-9]{3,16}$",
  },

  {
    id: 2,
    name: "email",
    type: "email",
    label: "Email",
    errorMessage: "Should be a valid email address!",
    required: true,
    pattern: "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/",
  },
];
