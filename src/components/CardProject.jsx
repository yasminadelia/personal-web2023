import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarthIcon from "../assets/images/icon-earth.svg";
import LinkIcon from "../assets/images/icon-link.svg";

const CardProject = ({ title, date, desc, tools, webLink, repoLink }) => {
  return (
    <li
      className="bg-transparent rounded-[20px] drop-shadow-lg 
        transition ease-in-out duration-300 h-80
        border-b-8 border-r-8 border-transparent hover:border-black"
    >
      <div className="border rounded-xl h-full">
        <Link href={"/projects"} className="text-black hover:text-black">
          {/* <img></img> */}
          <div className="bg-white h-1/2 rounded-t-xl"></div>
          <div className="bg-theme4 rounded-b-xl p-2 space-y-2 border-t h-1/2">
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
