import redStar from "../assets/red-star.png";
import greyStar from "../assets/grey-star.png";

export default function Rating(props) {
  return (
    <div className='rating'>
      <ul>
        {[...Array(parseInt(props.appartment.rating))].map((_, index) => (
          <img
            src={redStar}
            alt=''
          />
        ))}
      </ul>
      <ul>
        {[...Array(5 - parseInt(props.appartment.rating))].map((_, index) => (
          <img
            src={greyStar}
            alt=''
          />
        ))}
      </ul>
    </div>
  );
}
