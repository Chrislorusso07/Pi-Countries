import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./form.css";
import axios from "axios";
import { getCountries } from "../../redux/actions";

const Form = () => {
  const countries = useSelector((state) => state.allCountries);
  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  console.log(formData);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountrySelection = (e) => {
    const { value } = e.target;
    if (formData.country.includes(value)) {
      // Si ya está seleccionado, quitarlo de la lista
      const updatedCountries = formData.country.filter(
        (country) => country !== value
      );
      setFormData({
        ...formData,
        country: updatedCountries,
      });
    } else {
      // Si no está seleccionado, agregarlo a la lista
      setFormData({
        ...formData,
        country: [...formData.country, value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/activities", formData)
      .then((res) => alert("Tu actividad fue creada exitosamente"))
      .catch((error) => alert("Tu actividad fue denegada"));

    dispatch(getCountries());
  };

  return (
    <div className="form-container">
      <h2>Crear Actividad Turística</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Nombre:</label>
          <input
            placeholder="⚽🏀⛷️"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Dificultad:</label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          >
            <option value="">Seleccione Dificultad</option>
            <option value="Fácil">Fácil</option>
            <option value="Moderada">Moderada</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>
        <div className="form-field">
          <label>Duración:</label>
          <input
            placeholder="⌛ (meses)"
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Temporada:</label>
          <select
            name="season"
            value={formData.season}
            onChange={handleInputChange}
          >
            <option value="">Seleccione Temporada</option>
            <option value="Otoño">Otoño</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Invierno">Invierno</option>
          </select>
        </div>
        <div className="form-field">
          <label>Países:</label>
          <select
            name="country"
            multiple
            value={formData.country}
            onChange={handleCountrySelection}
          >
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={formData.country.length === 0}>
          Crear Actividad Turística
        </button>
      </form>
    </div>
  );
};

export default Form;
