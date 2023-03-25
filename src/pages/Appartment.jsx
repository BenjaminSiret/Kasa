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
    <div className='appartment'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Carousel appartment={appartment} />
          <div className='appartment-infos'>
            <div className='appartment-presentation'>
              <h2 className='appartment-title'>{appartment.title}</h2>
              <p className='appartment-location'>{appartment.location}</p>
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
              </div>
            </div>
            <div className='appartment-host'>
              <div className='appartment-host-infos'>
                <p className='appartment-host-name'>{appartment.host.name}</p>
                <img
                  className='appartment-host-picture'
                  src={appartment.host.picture}
                  alt=''
                />
              </div>
              <Rating appartment={appartment} />
            </div>
          </div>
          <div className='description'>
            <Collapse
              className='appartment-collapse'
              dropdownContainerClass='appartment-collapse-dropdown-container'
              dropdownTitleClass='appartment-collapse-dropdown-title'
              titleClass='appartment-collapse-title'
              text={appartment.description}
              title='Description'
            />
            <Collapse
              className='appartment-collapse'
              dropdownContainerClass='appartment-collapse-dropdown-container'
              dropdownTitleClass='appartment-collapse-dropdown-title'
              titleClass='appartment-collapse-title'
              listClass='appartment-collapse-list'
              text={appartment.equipments}
              title='Equipements'
            />
          </div>
        </>
      )}
    </div>
  );
}
