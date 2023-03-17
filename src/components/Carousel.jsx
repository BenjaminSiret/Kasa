import { useState } from "react";
import previousArrow from "../assets/previous-arrow.png";
import nextArrow from "../assets/next-arrow.png";

export default function Carousel(props) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [pictures] = useState(props.appartment.pictures);

  const previousPicture = () => {
    if (currentPicture > 0) {
      setCurrentPicture(currentPicture - 1);
    }
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    }
  };

  const nextPicture = () => {
    if (currentPicture < pictures.length - 1) {
      setCurrentPicture(currentPicture + 1);
    }
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    }
  };

  return (
    <div className='carousel'>
      {pictures.length > 1 && (
        <img
          className='previous-arrow'
          src={previousArrow}
          alt='previous arrow'
          onClick={previousPicture}
        />
      )}
      <img
        className='picture'
        src={pictures[currentPicture]}
        alt=''
      />
      {pictures.length > 1 && (
        <img
          className='next-arrow'
          src={nextArrow}
          alt='next arrow'
          onClick={nextPicture}
        />
      )}
      {pictures.length > 1 && (
        <p className='counter'>
          {currentPicture + 1}/{pictures.length}
        </p>
      )}
    </div>
  );
}
