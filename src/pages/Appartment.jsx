import appartments from "../data/appartments";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Appartment(props) {
  const { id } = useParams();

  const appartment = appartments.find((appartment) => appartment.id === id);

  return appartment ? (
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
  ) : (
    <Navigate to='*' />
  );
}
