import React, { Children, useState } from "react";
import { ChevronUpIcon } from "../icons";
import { ButtonSys } from "../buttons";

const Section = ({ title, children }) => {
  const [show, setShow] = useState(true);

  return (
    <section className="z-10 my-8 ">
      <div className="flex items-center justify-between rounded-full border bg-theme2 py-2 px-4 mb-5 text-2xl drop-shadow-lg">
        <h2>{title}</h2>
        <ButtonSys
          onClick={() => setShow(!show)}
          className={`transform ${
            show ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <ChevronUpIcon color={"#000"} size={24} />
        </ButtonSys>
      </div>
      {show && (
        <div
          className="transform-gpu transition-opacity duration-500 ease-in-out border 
          drop-shadow-lg py-8 px-2 md:px-4 md:mx-5 rounded-xl"
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
