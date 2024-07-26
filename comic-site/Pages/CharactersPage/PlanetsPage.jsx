import React, { useState, useEffect } from "react";
import "./PlanetsPage.css";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = "https://www.swapi.tech/api/planets";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        if (data && data.results && Array.isArray(data.results)) {
          const planetsData = await Promise.all(
            data.results.map(async (planet) => {
              const res = await fetch(planet.url);
              const planetData = await res.json();
              console.log("Planet data:", planetData);
              if (
                planetData &&
                planetData.result &&
                planetData.result.properties
              ) {
                return planetData.result.properties;
              } else {
                throw new Error("Invalid planet data structure");
              }
            })
          );
          setPlanets(planetsData);
        } else {
          throw new Error("Invalid data structure");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <p>Loading planets...</p>;
  }

  if (error) {
    return <p>Error fetching planets: {error}</p>;
  }

  return (
    <div className="planets-page">
      {planets.map((planet) => (
        <div key={planet.name} className="planet-item">
          <h3>{planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
        </div>
      ))}
    </div>
  );
};

export default PlanetsPage;
