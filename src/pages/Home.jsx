import { Link, useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerHome from "../assets/bannerHome.png";

export default function Home(props) {
  const bannerTitle = "Chez vous, partout et ailleurs";
  const [appartments] = useOutletContext();

  return (
    <div id='home'>
      <Banner
        image={bannerHome}
        text={bannerTitle}
        className='banner'
      />
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
