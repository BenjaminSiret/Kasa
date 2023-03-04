import { Link } from "react-router-dom";
import appartments from "../data/appartments";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div id='home'>
      <Banner />
      <ul>
        {appartments.map((appartment) => (
          <li key={appartment.id}>
            <Link to={`/appartments/${appartment.id}`}>{appartment.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
