import React from "react";
import Section from "./Section";
import { achievements } from "../../content";

const AchievementsSection = () => {
  return (
    <Section title="Personal Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {achievements.map(({ title, description, icon }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-black bg-theme4 
            hover:bg-theme2 transition duration-300 hover:scale-105 drop-shadow-lg"
          >
            <div className="text-5xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AchievementsSection;
