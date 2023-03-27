import React from "react";
import DeleteButton from "./Button/DeleteButton";

// Implement propType

export default function Modal(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClick();
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-black/70 top-0 right-0 left-0 bottom-0 fixed"
      ></div>
      <div
        className={`${props.className} absolute top-20 right-1/2 translate-x-1/2 max-w-xl w-full`}
      >
        {props.children}
        <DeleteButton onClick={handleClick} />
      </div>
    </>
  );
}
