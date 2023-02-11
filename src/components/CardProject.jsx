import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarthIcon from "../assets/images/icon-earth.svg";
import LinkIcon from "../assets/images/icon-link.svg";

const CardProject = ({ title, date, desc, tools, webLink, repoLink }) => {
  return (
    <li
      className="h-80 rounded-[20px] border-b-8 
        border-r-8 border-transparent bg-transparent drop-shadow-lg
        transition duration-300 ease-in-out hover:border-black"
    >
      <div className="h-full rounded-xl border">
        <Link
          href={"#"}
          className="text-black no-underline hover:text-black hover:no-underline"
        >
          {/* <img></img> */}
          <div className="h-1/2 rounded-t-xl bg-white"></div>
          <div className="h-1/2 space-y-2 rounded-b-xl border-t bg-theme4 p-2">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-end space-x-3">
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="text-sm">{date}</h4>
              </div>
              <div className="flex flex-row space-x-2">
                {/* <a href={webLink}> */}
                <Image src={EarthIcon} alt="earth icon" />
                {/* </a> */}
                {/* <a href={repoLink}> */}
                <Image src={LinkIcon} alt="link icon" />
                {/* </a> */}
              </div>
            </div>
            <p>{desc}</p>
            <p className="text-sm font-semibold">Tools: {tools}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CardProject;
