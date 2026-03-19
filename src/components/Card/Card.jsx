import { Link, NavLink } from 'react-router-dom'

function Card({ logement }) {
  return (
    <NavLink to={`/housing/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card__image" />
      <h2 className="card__title">{logement.title}</h2>
    </NavLink>
  );
}

export default Card;