import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllAppartments } from "../services/fetchAllAppartments";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerHome from "../assets/bannerHome.png";

export default function Home(props) {
  const bannerTitle = "Chez vous, partout et ailleurs";
  const [appartments, setAppartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAppartments() {
      const appartments = await fetchAllAppartments();
      setAppartments(appartments);
      setIsLoading(false);
    }
    getAppartments();
  }, []);

  return (
    <div id='home'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
