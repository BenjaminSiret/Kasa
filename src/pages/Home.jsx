import { Link } from "react-router-dom";
import appartments from "../data/appartments";

export default function Home() {
  return (
    <div>
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
