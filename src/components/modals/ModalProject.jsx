import React from "react";
import Modal from "./modal";

const ModalProject = ({ projectData, isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title={
        <h1 className="text-lg font-semibold">
          {projectData?.title} ({projectData?.date})
        </h1>
      }
      show={isModalOpen}
      setShow={setIsModalOpen}
    >
      <div className="flex flex-col gap-5 h-full overflow-y-auto">
        <div className="flex flex-col gap-5">{projectData?.desc}</div>
        <p className="text-sm font-semibold bg-theme2 p-2 rounded-full mb-5 border">
          Tools: {projectData?.tools}
        </p>
      </div>
    </Modal>
  );
};

export default ModalProject;
