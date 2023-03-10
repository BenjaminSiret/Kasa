import React, { useState } from "react";
import chevron from "../assets/chevron.png";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={props.className}>
      <div className='dropdownContainer'>
        <div className='dropdown-title'>
          <h3 className='about-title'>{props.title}</h3>
          <img
            src={chevron}
            alt='chevron'
            className={isOpen ? "chevron-open" : "chevron-close"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={isOpen ? "dropdown-open" : "dropdown-close"}>
          <p className='about-text'>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
