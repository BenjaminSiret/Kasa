import redStar from "../assets/red-star.png";
import greyStar from "../assets/grey-star.png";

export default function Rating(props) {
  return (
    <div className='rating'>
      <ul className='rating-list'>
        {[...Array(parseInt(props.appartment.rating))].map((_, index) => (
          <li key={index}>
            <img
              className='star'
              src={redStar}
              alt='star'
            />
          </li>
        ))}
      </ul>
      <ul className='rating-list'>
        {[...Array(5 - parseInt(props.appartment.rating))].map((_, index) => (
          <li key={index}>
            <img
              className='star'
              src={greyStar}
              alt='star'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
