import React, { useState, useEffect } from "react";
import "./StarWarsPage.css";

const StarWarsPage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      const url = "https://www.swapi.tech/api/films";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.result) {
          setFilms(data.result);
        } else {
          throw new Error("Invalid");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) {
    return <p>Loading films...</p>;
  }

  if (error) {
    return <p>Error fetching films: {error}</p>;
  }

  return (
    <div className="starwars-page">
      {films.map((film) => (
        <div key={film.uid} className="film-item">
          <h3>{film.properties.title}</h3>
          <p>Director: {film.properties.director}</p>
          <p>Release Date: {film.properties.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default StarWarsPage;
