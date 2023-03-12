import { useParams, Navigate, useOutletContext } from "react-router-dom";
import { isAppartmentIdValid } from "../services/isAppartmentIdValid";

export default function Appartment(props) {
  const { id } = useParams();
  const [appartments] = useOutletContext();

  if (!isAppartmentIdValid(id, appartments)) {
    return <Navigate to='ErrorBoundary' />;
  }

  const appartment = appartments.find((appartment) => appartment.id === id);

  return (
    <div id='appartment'>
      <img
        src={appartment.cover}
        alt='.'
      />
      <h2>{appartment.title}</h2>
      <p>{appartment.location}</p>
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
      <p>Description</p>
      <p className='tag-description'>{appartment.description}</p>
    </div>
  );
}
