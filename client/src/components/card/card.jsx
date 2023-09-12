import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, image, continent, id }) => {
  return (
    <NavLink to={`/countries/${id}`} className="cardlink">
      <div className="card-container">
        <h1 className="card-title">{name}</h1>
        <h3 className="card-subtitle">{continent}</h3>
        <img className="card-image" src={image} alt={name} />
      </div>
    </NavLink>
  );
};

export default Card;
