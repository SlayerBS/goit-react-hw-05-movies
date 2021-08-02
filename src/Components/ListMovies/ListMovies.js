import { Link, useRouteMatch } from "react-router-dom";
import styles from "./ListMovies.module.css";

export default function ListMovies({ data }) {
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
