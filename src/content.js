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
    role: "Full-Stack Developer",
    company: "Akusara Gautama Solution",
    period: "Oct 2023 - April 2026",
    description: [
      "Developed and maintained full-stack features for high-traffic government applications (200K+ daily users) using a microservices architecture",
      "Improved application performance up to 3x by implementing Redis caching, optimizing API payloads, and applying cursor-based pagination",
      "Integrated Vite into a large-scale React.js application, reducing build and load times by up to 2x",
      "Designed and implemented recursive queries for hierarchical document archiving",
      "Resolved security vulnerabilities identified by BSSN, including preventing information disclosure and securing sensitive parameters",
      "Implemented MFA, OTP-based password recovery, CAPTCHA, and rate limiting to enhance authentication security",
      "Collaborated with team members and provided technical guidance to improve development efficiency"
    ],
    tools: "React.js, Tailwind CSS, Laravel, PostgreSQL, Redis, MongoDB, Git"

  },
  {
    role: "Front-End Developer",
    company: "Mitramas Infosys Global",
    period: "Sep 2022 - Aug 2024",
    description: [
      "Developed 8 integrated modules in MIGsys website (ERP system), enhancing operational efficiency. These modules include work shift and schedule management, employee and payslip management, resume builder, and recruitment management",
      "Built and standardized reusable UI components, improving development speed and UI consistency",
      "Implemented advanced features such as drag-and-drop interfaces, activity logs, custom calendars, and auto-saving forms",
      "Developed PDF generation features and talent pool system to support recruitment workflows",
      "Contributed to learning management system features and bug fixes",
    ],
    tools: "Next.js, Tailwind CSS, TypeScript, Ant Design, React Query, Git",
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

const achievements = [

  {
    title: "High-Traffic System Performance",
    description: "handling maintenance in high-traffic government application serving 200K+ daily users.",
    icon: "👥"
  },
  {
    title: "Performance Optimization",
    description: "improving application performance by up to 3x through caching and optimization.",
    icon: "⚡"
  },
  {
    title: "Build Time Reduction",
    description: "reducing build and load times by 2x by integrating Vite.",
    icon: "🚀"
  },
  {
    title: "Security Enhancement",
    description: "resolving security vulnerabilities identified by BSSN.",
    icon: "🔒"
  },
  {
    title: "Full-Stack Expertise",
    description: "developing 8+ production modules across multiple applications.",
    icon: "💻"
  }
];

const learningTopics = [
  // "Go (GoFiber)",
  "Advanced Web Security (OWASP)",
  "System Architecture & Scalability",
  "Performance Optimization Techniques"
];

const projects = [
  {
    title: "Learning System",
    date: "2021",
    badge: "Internship Project",
    metrics: "10+ reusable components",
    desc: (
      <>
        Built a web-based learning system for a Singapore institute, developing 10+ reusable components including post views, theme switcher, search functionality, and comment sections. Collaborated with a team of 5 front-end developers to deliver student/lecturer profiles, blog posts, and course task submission features.
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
    badge: "University Project",
    metrics: "Full-stack with automated testing",
    desc: (
      <>
        <p>
          Developed a Small and Medium-sized Enterprise (UMKM) permission platform using Scrum methodology. Implemented automated testing achieving high code coverage using React Testing Library, Jest, and Django testing framework.
        </p>

        <p>
          Implemented front-end of core forms and modals, as well as back-end serializers and validators. Project followed complete Scrum framework with sprint planning, reviews, and retrospectives over a full semester.
        </p>
      </>
    ),
    tools: "ReactJS, TailwindCSS, Django REST Framework",
    webLink: "",
    repoLink: "",
    coverImage: ProjectCoverUMKM,
  },
  {
    title: "Farmakami",
    date: "2020",
    badge: "University Project",
    metrics: "Complex triggers & stored procedures",
    desc: (
      <>
        <p>
          Developed a pharmacy information system with advanced database features. Implemented CRUD operations for pharmacy and medicine management, utilizing PostgreSQL triggers and stored procedures to automate delivery status workflows.
        </p>

        <p>
          Designed and executed complex database logic to ensure data integrity and automate business processes, demonstrating strong database architecture skills.
        </p>
      </>
    ),
    tools: "PostgreSQL, HTML, CSS, Bootstrap, Django",
    webLink: "",
    repoLink: "https://gitlab.com/basdatd40/farmakami",
    coverImage: ProjectCoverFarmakami,
  },
  {
    title: "MatkulPanda",
    date: "2020",
    badge: "University Project",
    metrics: "Complete SDLC implementation",
    desc: (
      <>
        <p>
          Designed and developed a course review platform for Fasilkom UI students. Led the complete software development lifecycle from requirements gathering to implementation, creating comprehensive documentation including use cases, activity diagrams, and sequence diagrams.
        </p>

        <p>
          Implemented course information pages, testimonial systems, and detailed course views using Django and PostgreSQL with a custom UI designed in Figma.
        </p>
      </>
    ),
    tools: "HTML, CSS, Bootstrap, Django, PostgreSQL",
    webLink: "",
    repoLink: "",
    coverImage: null,
  },
];

const skills = ["team work", "attention to detail"];

const toolCategories = [
  {
    category: "Core Frontend",
    tools: [
      { logo: ReactLogo, name: "ReactJS" },
      { logo: JSLogo, name: "JavaScript" },
      { logo: HTMLLogo, name: "HTML" },
      { logo: CSSLogo, name: "CSS" },
      { logo: TailwindLogo, name: "TailwindCSS" },
    ]
  },
  {
    category: "Backend & Database",
    tools: [
      { logo: PythonLogo, name: "Python" },
      { logo: PostgreLogo, name: "PostgreSQL" },
    ]
  },
  {
    category: "Tools & Others",
    tools: [
      { logo: GitLogo, name: "Git" },
      { logo: FigmaLogo, name: "Figma" },
    ]
  }
];



export { projects, experiences, skills, toolCategories, achievements, learningTopics };
