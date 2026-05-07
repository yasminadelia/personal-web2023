import Image from "next/image";
import Link from "next/link";
import React from "react";
import EarthIcon from "../assets/images/icon-earth.svg";
import LinkIcon from "../assets/images/icon-link.svg";
import { limitText } from "../helper";
import { PolaroidIcon, ToolsIcon } from "./icons";

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
        transition duration-300 ease-in-out hover:border-black hover:scale-[1.02] md:min-h-[520px]"
      onClick={onClick}
    >
      <div className="h-full rounded-xl border-2 border-black flex flex-col">
        <div className={`relative h-48 rounded-t-xl flex-shrink-0`}>
          {coverImage ? (
            <Image
              src={coverImage}
              alt="Project cover"
              className="object-cover h-full w-full rounded-t-xl"
            ></Image>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-theme2 to-theme4 rounded-t-xl">
              <PolaroidIcon size={"48px"} />
            </div>
          )}
          {badge && (
            <div className="absolute top-2 left-2">
              <span className="bg-theme2 text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-md">
                {badge}
              </span>
            </div>
          )}
          <div className="absolute right-2 bottom-2 flex flex-row space-x-2">
            {!!webLink && (
              <a
                href={webLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg p-2 hover:bg-theme2 border border-black shadow-md transition-all"
              >
                <Image
                  src={EarthIcon}
                  alt="earth icon"
                  width={20}
                  height={20}
                />
              </a>
            )}
            {!!repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg p-2 hover:bg-theme2 border border-black shadow-md transition-all"
              >
                <Image src={LinkIcon} alt="link icon" width={20} height={20} />
              </a>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col space-y-2 rounded-b-xl border-t-2 border-black bg-theme3 p-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-md font-bold lg:text-lg flex-1 mr-2">
              {title}
            </h3>
            <p className="text-sm px-3 py-1 bg-theme2 rounded-full border border-black whitespace-nowrap">
              {date}
            </p>
          </div>
          {metrics && (
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold text-theme5 bg-white px-2 py-1 rounded-md inline-block border border-black/20">
                {metrics}
              </p>
            </div>
          )}
          <div className="flex-1 overflow-hidden">
            <div className="line-clamp-3 md:line-clamp-5 lg:line-clamp-6 text-sm leading-relaxed">
              {desc}
            </div>
          </div>
          <div className="pt-2 mt-auto border-t border-black/10 flex items-start gap-2">
            <ToolsIcon size={16} color={"#000"} />{" "}
            <p className="text-xs font-semibold text-black/70">
              {limitText(tools, 50)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardProject;
