import React from "react";
import { ButtonSys } from "../buttons";
import { XIcon } from "../icons";

const Modal = ({ title, show, setShow, width, height, children }) => {
  return show ? (
    <div className="overlay">
      <div
        className={`modal flex flex-col gap-5`}
        style={{ width: width ?? "80%", height: height ?? "75%" }}
      >
        <div className="flex items-center justify-between">
          {title}
          <ButtonSys onClick={() => setShow(false)}>
            <XIcon size={20} />
          </ButtonSys>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
