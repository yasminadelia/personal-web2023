import React from "react";

const ExperienceSection = () => {
  return (
    <section className="z-10 my-8">
      <h2 className="my-8 rounded-full border bg-theme2 py-2 px-4 text-2xl drop-shadow-lg">
        Work Experiences
      </h2>
      <ul className="space-y-4">
        {experiences.map(({ role, company, period, description, tools }) => (
          <li key={company} className="flex flex-row space-x-2">
            <p className="text-4xl">🌻</p>
            <div>
              <h3 className="mb-3 text-lg font-semibold">{role}</h3>
              <p className="text-md mb-2">
                <span className="mr-2 font-semibold">{company}</span> |{" "}
                <span className="ml-2">{period}</span>
              </p>
              <p className="mb-2 text-justify text-sm">{description}</p>
              {tools && (
                <p className="text-justify text-sm">
                  <strong>Tools:</strong> {tools}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;

const experiences = [
  {
    role: "Front-End Developer",
    company: "Mitramas Infosys Global",
    period: "Sep 2022 - Now",
    description:
      "Developed the front-end of a website that used for manage recruitment, create resume, and manage employee payslip.",
    tools: "Next.js, TailwindCSS, Ant Design components, React PDF",
  },
  {
    role: "Software Developer Intern",
    company: "Studycle",
    period: "Aug 2021 - Apr 2022",
    description:
      "Developed the front-end of a learning system website for an institute based in Singapore.",
    tools: "ReactJS, TailwindCSS",
  },
  {
    role: "Teaching Assistant of Data Science & Database",
    company: "Universitas Indonesia",
    period: "Aug 2021 - Apr 2022",
    description: "Tutoring and assess student's assignment",
    tools: "Python, PostgreSQL, diagrams.net",
  },
];
