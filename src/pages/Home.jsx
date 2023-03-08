import { Link } from "react-router-dom";
import appartments from "../data/appartments";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <div id='home'>
      <Banner />
      <ul className='appartments-list'>
        {appartments.map((appartment) => (
          <li
            className='appartment-card'
            key={appartment.id}
          >
            <Link
              className='card-link'
              to={`/appartments/${appartment.id}`}
            >
              <Card appartment={appartment} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
