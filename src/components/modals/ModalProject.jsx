import React from "react";
import Modal from "./modal";
import Image from "next/image";
import {
  CodeIcon,
  KeyIcon,
  PolaroidIcon,
  TagIcon,
  UsersGroupIcon,
} from "../icons";

const ModalProject = ({ projectData, isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title={
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">{projectData?.title}</h1>
          <span className="px-3 py-1 bg-theme2 text-sm font-bold rounded-full border border-black">
            {projectData?.date}
          </span>
        </div>
      }
      show={isModalOpen}
      setShow={setIsModalOpen}
    >
      <div className="flex flex-col gap-6 h-full overflow-y-auto pr-2">
        {/* Badges Section */}
        <div className="flex flex-wrap gap-2">
          {projectData?.badge && (
            <span className="inline-flex gap-2 items-center px-3 py-1 bg-theme3 text-sm font-bold rounded-full border border-black">
              <TagIcon size={16} />
              {projectData.badge}
            </span>
          )}
          {projectData?.metrics && (
            <span className="inline-flex gap-2 items-center px-3 py-1 bg-theme4 text-sm font-bold rounded-full border border-black">
              <KeyIcon size={16} />
              {projectData.metrics}
            </span>
          )}
          {projectData?.teamSize && (
            <span className="inline-flex gap-2 items-center px-3 py-1 bg-theme2 text-sm font-bold rounded-full border border-black">
              <UsersGroupIcon size={16} />
              Team of {projectData.teamSize}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Cover Image */}
          {projectData?.coverImage ? (
            <div className="md:col-span-5 rounded-xl overflow-hidden border-2 border-black shadow-lg">
              <Image
                src={projectData.coverImage}
                alt={`${projectData.title} cover`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="md:col-span-5 flex h-40 items-center justify-center bg-gradient-to-br from-theme2 to-theme4 rounded-xl border-2 border-black shadow-lg">
              <PolaroidIcon size={"48px"} />
            </div>
          )}

          <div className="md:col-span-7 flex flex-col gap-4">
            {/* Description */}
            <div className="bg-theme4 rounded-xl p-6 border-2 border-black">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Project Description
              </h3>
              <div className="flex flex-col gap-4 text-base leading-relaxed">
                {projectData?.desc}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-theme2 to-theme3 rounded-xl p-6 border-2 border-black">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData?.tools?.split(",").map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-white rounded-lg text-sm font-semibold border-2 border-black/20 hover:border-black transition-all"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(projectData?.webLink || projectData?.repoLink) && (
              <div className="flex gap-3">
                {projectData?.webLink && (
                  <a
                    href={projectData.webLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-3 bg-theme2 text-center font-bold rounded-xl border-2 border-black hover:bg-theme3 transition-all no-underline hover:no-underline text-black hover:text-black"
                  >
                    View Live
                  </a>
                )}
                {projectData?.repoLink && (
                  <a
                    href={projectData.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-3 bg-white text-center font-bold rounded-xl border-2 border-black hover:bg-theme3 transition-all no-underline hover:no-underline text-black hover:text-black"
                  >
                    <span className="inline-flex items-center gap-2">
                      <CodeIcon size={20} color={"#000"} />
                      View Code
                    </span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
