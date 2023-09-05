import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarthIcon from "../assets/images/icon-earth.svg";
import LinkIcon from "../assets/images/icon-link.svg";
import { limitText } from "../helper";

const CardProject = ({
  title,
  date,
  desc,
  tools,
  webLink,
  repoLink,
  onClick,
}) => {
  return (
    <li
      className="min-h-[350px] rounded-[20px] border-b-8 
        border-r-8 border-transparent bg-transparent drop-shadow-lg
        transition duration-300 ease-in-out hover:border-black "
      onClick={onClick}
    >
      <div className="h-full rounded-xl border">
        <Link
          href={"#"}
          className="text-black no-underline hover:text-black hover:no-underline"
        >
          {/* <img></img> */}
          <div className="relative h-1/2 rounded-t-xl bg-white sm:h-1/3 lg:h-1/2">
            <div className="absolute right-2 bottom-2 flex flex-row space-x-2">
              {/* <a href={webLink}> */}
              <Image src={EarthIcon} alt="earth icon" />
              {/* </a> */}
              {/* <a href={repoLink}> */}
              <Image src={LinkIcon} alt="link icon" />
              {/* </a> */}
            </div>
          </div>
          <div className="h-1/2 space-y-2  rounded-b-xl border-t bg-theme4 p-2 sm:h-2/3 lg:h-1/2">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-md font-bold lg:text-lg">{title}</h3>
              <h4 className="text-md">{date}</h4>
            </div>
            <p className="overflow-hidden">{limitText(desc)}</p>
            <p className="overflow-hidden text-ellipsis text-sm font-semibold">
              Tools: {limitText(tools)}
            </p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CardProject;
