import React from "react";

const Experiences = () => {
  return (
    <section className="my-8">
      <h2 className="py-2 px-4 my-4 bg-theme2 rounded-full border-2 drop-shadow-lg text-2xl">
        Work Experiences
      </h2>
      <ul className="space-y-4">
        {experiences.map(({ role, company, period, description }) => (
          <li key={company} className="flex flex-row space-x-2">
            <p className="text-4xl">🌻</p>
            <div>
              <h3 className="text-lg font-semibold">{role}</h3>
              <p className="text-md">
                <span className="mr-2 font-semibold">{company}</span> |{" "}
                <span className="ml-2">{period}</span>
              </p>
              <p className="text-sm">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;

const experiences = [
  {
    role: "Front-End Developer",
    company: "Mitramas Infosys Global",
    period: "Sep 2022 - Now",
    description:
      "Develop the company's website using Next.js, TailwindCSS, and Ant Design components.",
  },
  {
    role: "Software Developer Intern",
    company: "Studycle",
    period: "Aug 2021 - Apr 2022",
    description:
      "Develop the company's website using Next.js, TailwindCSS, and Ant Design components.",
  },
  {
    role: "Teaching Assistant of Data Science & Database",
    company: "Universitas Indonesia",
    period: "Aug 2021 - Apr 2022",
    description:
      "Develop the company's website using Next.js, TailwindCSS, and Ant Design components.",
  },
];
