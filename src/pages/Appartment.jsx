import { useParams, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isAppartmentIdValid } from "../services/isAppartmentIdValid";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

export default function Appartment(props) {
  const { id } = useParams();
  const { state } = useLocation();
  const appartments = state.appartments;

  if (!isAppartmentIdValid(id, appartments)) {
    return <Navigate to='ErrorBoundary' />;
  }

  const appartment = appartments.find((appartment) => appartment.id === id);

  return (
    <div id='appartment'>
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
    </div>
  );
}
