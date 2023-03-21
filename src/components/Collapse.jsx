import React, { useState } from "react";
import chevron from "../assets/chevron.png";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={props.className}>
      <div className='dropdownContainer'>
        <div className='dropdown-title'>
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
            isOpen ? `dropdown-open ${props.dropdownClass}` : "dropdown-close"
          }
        >
          {Array.isArray(props.text) ? (
            <ul className={props.listClass}>
              {props.text.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className={props.textClass}>{props.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}
