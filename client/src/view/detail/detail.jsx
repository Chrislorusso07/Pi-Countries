import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => setCountry(data))
      .catch((error) => {
        alert("Error al obtener los detalles.");
      });
  }, [id]);

  return (
    <div className="detail-card">
      <h1>ID: {id}</h1>
      <h2>{country.name}</h2>
      <img src={country.flagImage} alt={country.name} className="detail-flag" />
      <p>Continente: {country.continent}</p>
      <p>Capital: {country.capital}</p>
      {country.subregion && <p>Subregión: {country.subregion}</p>}
      {country.area && <p>Área: {country.area} km²</p>}
      <p>Población: {country.population}</p>
      <NavLink className="act" to={`/countries/${id}/actividad`}>
        Actividades: {country.Activities?.map((a) => a.name).join(", ")}
      </NavLink>
    </div>
  );
};

export default Detail;
