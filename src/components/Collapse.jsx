import React, { useState } from "react";
import chevron from "../assets/chevron.png";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={props.className}>
      <div className={props.dropdownContainerClass}>
        <div className={props.dropdownTitleClass}>
          <h3 className={`collapse-title ${props.titleClass}`}>
            {props.title}
          </h3>
          <img
            src={chevron}
            alt='chevron'
            className={`chevron ${isOpen ? "chevron-open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={
            isOpen
              ? `${props.dropdownOpenClass} dropdown-open`
              : "dropdown-close"
          }
        >
          {Array.isArray(props.text) ? (
            <ul className='dropdown-text'>
              {props.text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className='dropdown-text'>{props.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}
