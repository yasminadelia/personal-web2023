import React from "react";
import Section from "./Section";
import { experiences } from "../../content";

const ExperienceSection = () => {
  return (
    <Section title={"Work Experiences"}>
      <ul className="description space-y-4 ">
        {experiences.map(({ role, company, period, description, tools }) => (
          <li key={company} className="flex flex-row space-x-2">
            <p className="text-4xl">🌻</p>
            <div className="flex flex-col gap-1">
              <h3 className=" text-lg font-semibold">{role}</h3>
              <p className="text-md">
                <span className="mr-2 font-semibold">{company}</span> |{" "}
                <span className="ml-2">{period}</span>
              </p>
              {tools && (
                <p className="md:text-justify text-sm">
                  <strong>Tools:</strong> {tools}
                </p>
              )}
              <ul className="mt-2 space-y-3 md:text-justify text-sm pr-8">
                {description?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ExperienceSection;
