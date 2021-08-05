import { Link, useLocation } from "react-router-dom";

export default function ListMovies({ data }) {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
              label: "Back to Movies",
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
