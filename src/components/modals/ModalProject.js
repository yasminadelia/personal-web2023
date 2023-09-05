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
      width={40}
      show={isModalOpen}
      setShow={setIsModalOpen}
    >
      <div className="flex flex-col gap-3">
        <p>{projectData?.desc}</p>
        <p className="overflow-hidden text-ellipsis text-sm font-semibold">
          Tools: {projectData?.tools}
        </p>
      </div>
    </Modal>
  );
};

export default ModalProject;
