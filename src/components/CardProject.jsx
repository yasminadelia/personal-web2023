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
  coverImage,
  webLink,
  repoLink,
  onClick,
  badge,
  metrics,
}) => {
  return (
    <li
      className="min-h-[300px] rounded-[20px] border-b-8 
        border-r-8 border-transparent bg-transparent drop-shadow-lg cursor-pointer
        transition duration-300 ease-in-out hover:border-black hover:scale-[1.02] md:min-h-[500px]"
      onClick={onClick}
    >
      <div className="h-full rounded-xl border">
        <div className={`relative h-1/2 rounded-t-xl sm:h-1/3 lg:h-1/2`}>
          {coverImage ? (
            <Image
              src={coverImage}
              alt="Project cover"
              className="object-cover h-full w-full rounded-t-xl "
            ></Image>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-theme2 to-theme4">
              <p className="text-4xl">📱</p>
            </div>
          )}
          {badge && (
            <div className="absolute top-2 left-2">
              <span className="bg-theme2 text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black">
                {badge}
              </span>
            </div>
          )}
          <div className="absolute right-2 bottom-2 flex flex-row space-x-2">
            {!!webLink && (
              <a href={webLink} target="_blank" rel="noreferrer">
                <Image src={EarthIcon} alt="earth icon" />
              </a>
            )}
            {!!repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-theme4 rounded-lg p-2 hover:bg-theme2"
              >
                <Image src={LinkIcon} alt="link icon" />
              </a>
            )}
          </div>
        </div>
        <div className="h-1/2 space-y-2 rounded-b-xl border-t bg-theme4 p-2 sm:h-2/3 lg:h-1/2">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-md font-bold lg:text-lg">{title}</h3>
            <h4 className="text-md px-2 bg-theme2 rounded-full border">
              {date}
            </h4>
          </div>
          {metrics && (
            <p className="text-sm font-semibold text-theme5 bg-theme3 px-2 py-1 rounded-md inline-block">
              {metrics}
            </p>
          )}
          <div className="grid grid-cols-1 gap-3 max-h-12 md:max-h-36 overflow-clip">
            {desc}
          </div>
          <p className="overflow-hidden text-ellipsis text-sm font-semibold">
            Tools: {limitText(tools)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CardProject;
