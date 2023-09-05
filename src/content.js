import ReactLogo from "./assets/images/logo-react.svg";
import JSLogo from "./assets/images/logo-js.svg";
import HTMLLogo from "./assets/images/logo-html.svg";
import CSSLogo from "./assets/images/logo-css.svg";
import TailwindLogo from "./assets/images/logo-tailwind.svg";
import GitLogo from "./assets/images/logo-git.svg";
import FigmaLogo from "./assets/images/logo-figma.svg";
import PythonLogo from "./assets/images/logo-python.svg";
import PostgreLogo from "./assets/images/logo-postgresql.svg";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Mitramas Infosys Global",
    period: "Sep 2022 - Now",
    description: [
      <p key={1}>
        <strong>Projects:</strong> resume builder, candidates recruitment
        management, employee and payslip management, project and task
        management, leasing contract and invoice management, learning management
        system
      </p>,
      <p key={2}>
        Collaborated closely with team members, ranging from project manager,
        UI/UX designer, and backend developers
      </p>,
    ],
    tools: "Next.js, TailwindCSS, Ant Design, ReactPDF",
  },
  {
    role: "Software Developer Intern",
    company: "Studycle",
    period: "Aug 2021 - Apr 2022",
    description: [
      "Developed a web-based learning system application for an institute in Singapore.",
      "Demonstrated strong component-based development skills by creating over 10 reusable components, including single post view, theme switcher, search bar, cards, navbar, footer, toggle, comment section, and more. These components enhanced the application's functionality, usability, and visual appeal while ensuring code modularity and reusability.",
      "Collaborated effectively in a team of 5 front-end interns, engaging in regular communication, task coordination, and knowledge sharing.",
      "Created CRUD back-end as a practice task using Flask, SQL-Alchemy, and Blueprint to expand my skill set and gain hands-on experience in full-stack software development.",
    ],
    tools: "ReactJS, TailwindCSS, Redux",
  },
  {
    role: "Teaching Assistant of Data Science & Database",
    company: "Universitas Indonesia",
    period: "Aug 2021 - Apr 2022",
    description: [
      "Created a solution for ERD task and created a self-test about EERD.",
      "Explained database tutorial to students about creating schema, table, basic SQL query, views, and indexing on PostgreSQL.",
      "Created and explained Python tutorial about introduction to Pandas, NumPy, and Scikit-learn.",
    ],
    tools: "Python, PostgreSQL",
  },
];

const projects = [
  {
    title: "Learning System",
    date: "2021",
    desc: `A web based learning system for an institute in Singapore. 
    Some of the features including student and 
    lecturer profile, blog post, course task submission, and gallery.`,
    tools: "ReactJS, TailwindCSS",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "UMKM Platform",
    date: "2021",
    desc: "Website for applying SME (UMKM) permission.",
    tools: "ReactJS, TailwindCSS, Django REST Framework",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "MatkulPanda",
    date: "2020",
    desc: "Website used for read and give testimonies on courses in Fasilkom UI",
    tools: "HTML, CSS, Bootstrap, Django",
    webLink: "/",
    repoLink: "/",
  },
  {
    title: "Farmakami",
    date: "2020",
    desc: "A website for pharmacy information system",
    tools: "HTML, CSS, Bootstrap, Django",
    webLink: "/",
    repoLink: "/",
  },
];

const skills = ["team work", "attention to detail"];

const tools = [
  {
    logo: ReactLogo,
    name: "ReactJS",
  },
  {
    logo: JSLogo,
    name: "JavaScript",
  },
  {
    logo: HTMLLogo,
    name: "HTML",
  },
  {
    logo: CSSLogo,
    name: "CSS",
  },
  {
    logo: TailwindLogo,
    name: "TailwindCSS",
  },
  {
    logo: GitLogo,
    name: "Git",
  },
  {
    logo: FigmaLogo,
    name: "Figma",
  },
  {
    logo: PythonLogo,
    name: "Python",
  },
  {
    logo: PostgreLogo,
    name: "PostgreSQL",
  },
];

export { projects, experiences, skills, tools };
