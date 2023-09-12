import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./detalleActividad.css";

function AcitividadDetalle() {
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
    <div className="actividad">
      <h1>Actividades: {country.Activities?.map((a) => a.name).join(", ")}</h1>
      <p>
        Dificultad: {country.Activities?.map((a) => a.difficulty).join(", ")}
      </p>
      <p>Temporada: {country.Activities?.map((a) => a.season).join(", ")}</p>
      <p>Duracion: {country.Activities?.map((a) => a.duration).join(", ")}</p>
    </div>
  );
}

export default AcitividadDetalle;
