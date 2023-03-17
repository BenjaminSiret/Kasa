import { useParams, Navigate, useOutletContext } from "react-router-dom";
import { isAppartmentIdValid } from "../services/isAppartmentIdValid";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

export default function Appartment(props) {
  const { id } = useParams();
  const [appartments] = useOutletContext();

  if (!isAppartmentIdValid(id, appartments)) {
    return <Navigate to='ErrorBoundary' />;
  }

  const appartment = appartments.find((appartment) => appartment.id === id);

  return (
    <div id='appartment'>
      <Carousel appartment={appartment} />
      <div className='infos'>
        <div className='presentation'>
          <h2 className='title'>{appartment.title}</h2>
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
          className='collapse'
          title='Description'
          titleClass='description-title'
          text={appartment.description}
        />
        <Collapse
          className='collapse'
          title='Equipements'
          titleClass='equipments-title'
          text={appartment.equipments}
        />
      </div>
    </div>
  );
}
