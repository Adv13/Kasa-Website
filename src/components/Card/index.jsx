import { Link } from "react-router-dom";

function Card(props) {
  const { id, title, cover } = props;

  return (
    <article className="card" key={id}>
      <Link to={`/logement/${id}`}>
        <div className="title">{title}</div>
        <img src={cover} alt={title} className="card--image" />
      </Link>
    </article>
  );
}

export default Card;