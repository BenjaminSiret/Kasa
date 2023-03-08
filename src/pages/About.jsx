import React, { useState } from "react";
import chevron from "../assets/chevron.png";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='about'>
      <div className='dropdownContainer'>
        <div className='dropdown-title'>
          <h3 className='about-title'>Fiabilité</h3>
          <img
            src={chevron}
            alt='chevron'
            className={isOpen ? "chevron-open" : "chevron-close"}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={isOpen ? "dropdown-open" : "dropdown-close"}>
          <p className='about-text'>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>
    </div>
  );
}
