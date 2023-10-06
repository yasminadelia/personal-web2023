import ReactLogo from "./assets/images/logo-react.svg";
import JSLogo from "./assets/images/logo-js.svg";
import HTMLLogo from "./assets/images/logo-html.svg";
import CSSLogo from "./assets/images/logo-css.svg";
import TailwindLogo from "./assets/images/logo-tailwind.svg";
import GitLogo from "./assets/images/logo-git.svg";
import FigmaLogo from "./assets/images/logo-figma.svg";
import PythonLogo from "./assets/images/logo-python.svg";
import PostgreLogo from "./assets/images/logo-postgresql.svg";
import ProjectCoverLS from "./assets/images/cover-project-ls.png";
import ProjectCoverUMKM from "./assets/images/cover-project-umkm.png";
import ProjectCoverFarmakami from "./assets/images/cover-project-farmakami.png";

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
    desc: (
      <>
        A web based learning system for an institute in Singapore. This project
        is part of my task when interning as a software developer. I
        collaborated with a team of five to developed the front-end app. This
        app was built using React.js, with styling done using Tailwind CSS, and
        Redux was used for state management. Some of the features I worked on
        included student and lecturer profiles, blog posts, and course task
        submission.
      </>
    ),
    tools: "ReactJS, TailwindCSS, Redux",
    webLink: "",
    repoLink: "",
    coverImage: ProjectCoverLS,
  },
  {
    title: "UMKM Platform",
    date: "2021",
    desc: (
      <>
        <p>
          A website for obtaining Small and Medium-sized Enterprise (SME or
          UMKM) permissions. This project is part of Software Engineering
          Project course in my undergraduate study. I collaborated with a team
          of five members to create both the front-end and back-end applications
          based on the client&apos;s specifications.{" "}
        </p>

        <p>
          The front-end was built using React.js and styled using Tailwind CSS.
          For the back-end, we utilized Django REST Framework. Additionally, we
          implemented automated testing for both front-end and back-end, using
          React Testing Library and Jest for front-end, and Django&apos;s
          default testing library for back-end. In front-end, my
          responsibilities included implementing footer, &apos;Izin UMK&apos;
          form, and modal for &apos;Proyek Baru&apos;. In back-end, I worked on
          creating serializers and validators for &apos;Izin UMK&apos; form.
        </p>

        <p>
          This project spanned nearly one semester and followed the Scrum
          framework, which involved various events such as sprint planning,
          sprints, sprint reviews, and sprint retrospectives.
        </p>
      </>
    ),
    tools: "ReactJS, TailwindCSS, Django REST Framework",
    webLink: "",
    repoLink: "",
    coverImage: ProjectCoverUMKM,
  },
  {
    title: "MatkulPanda",
    date: "2020",
    desc: (
      <>
        <p>
          A website used for discovering and providing testimonials for courses
          held in Fasilkom UI. This project is part of my Software Engineering
          course during my undergraduate studies. I collaborated with a team of
          four to develop the application, from gathering requirements to its
          implementation. We created various documents such as requirement
          analysis, use case specifications, activity diagrams, design class
          diagrams, and sequence diagrams. Additionally, we designed the user
          interface using Figma.
        </p>

        <p>
          For the front-end, we implemented it using HTML and CSS, while the
          back-end was developed using Django and PostgreSQL. Specifically, my
          contributions included the creation of &apos;Info Matkul&apos; page,
          course testimonial list, and course detail page.
        </p>
      </>
    ),
    tools: "HTML, CSS, Bootstrap, Django, PostgreSQL",
    webLink: "",
    repoLink: "",
  },
  {
    title: "Farmakami",
    date: "2020",
    desc: (
      <>
        <p>
          A web based pharmacy information system. This project was a group task
          during my database course in undergraduate study. Our team consisted
          of five members, and we implemented the application using PostgreSQL,
          Django, HTML, CSS, and Bootstrap.{" "}
        </p>

        <p>
          My specific contributions included implementing CRUD features on the
          &apos;Balai Pengobatan&apos; and &apos;Obat&apos; pages. Additionally,
          I created triggers and stored procedures to manage changes in the
          delivery status.
        </p>
      </>
    ),
    tools: "PostgreSQL, HTML, CSS, Bootstrap, Django",
    webLink: "",
    repoLink: "https://gitlab.com/basdatd40/farmakami",
    coverImage: ProjectCoverFarmakami,
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
