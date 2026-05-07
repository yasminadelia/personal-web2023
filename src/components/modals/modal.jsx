import React from "react";
import { ButtonSys } from "../buttons";
import { XIcon } from "../icons";

const Modal = ({ title, show, setShow, width, height, children }) => {
  return show ? (
    <div className="overlay">
      <div
        className={`modal flex flex-col gap-5 bg-theme1`}
        style={{
          width: width ?? "90%",
          height: height ?? "85%",
          maxWidth: "1200px",
        }}
      >
        <div className="flex items-center justify-between border-b-2 border-black pb-4">
          {title}
          <ButtonSys onClick={() => setShow(false)} bgColor="bg-theme2">
            <XIcon size={20} />
          </ButtonSys>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
