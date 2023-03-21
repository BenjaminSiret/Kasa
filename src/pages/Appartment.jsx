import { useParams, useNavigate } from "react-router-dom";
import { isAppartmentIdValid } from "../services/isAppartmentIdValid";
import { useEffect, useState } from "react";
import { fetchAllAppartments } from "../services/fetchAllAppartments";

import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

export default function Appartment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appartment, setAppartment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAppartment() {
      const appartments = await fetchAllAppartments();
      if (!isAppartmentIdValid(id, appartments)) {
        navigate("ErrorBoundary");
      }
      const appartment = appartments.find((appartment) => appartment.id === id);
      setAppartment(appartment);
      setIsLoading(false);
    }
    getAppartment();
  }, [id, navigate]);

  return (
    <div id='appartment'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Carousel appartment={appartment} />
          <div className='infos'>
            <div className='presentation'>
              <h2 className='appartment-title'>{appartment.title}</h2>
              <p className='location'>{appartment.location}</p>
            </div>
            <div className='host'>
              <p className='host-name'>{appartment.host.name}</p>
              <img
                className='host-picture'
                src={appartment.host.picture}
                alt=''
              />
            </div>
          </div>
          <div className='tags'>
            <ul className='tags-list'>
              {appartment.tags.map((tag, index) => (
                <li
                  key={index}
                  className='tag'
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Rating appartment={appartment} />
          </div>
          <div className='description'>
            <Collapse
              className='appartment-collapse'
              title='Description'
              titleClass='appartment-collapse-title'
              textClass='appartment-collapse-text'
              dropdownClass='appartment-collapse-dropdown'
              text={appartment.description}
            />
            <Collapse
              className='appartment-collapse'
              title='Equipements'
              titleClass='appartment-collapse-title'
              dropdownClass='appartment-collapse-dropdown'
              text={appartment.equipments}
            />
          </div>
        </>
      )}
    </div>
  );
}
