import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedPlanet } from "../services/api";

const DetailedPlanet = () => {
  const { id } = useParams();

  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const data = await getDetailedPlanet(id);
        setPlanet(data);
      } catch {
        console.log("Planet not found");
      }
    };
    fetchPlanet();
  }, [id]);

  if (!planet) return <p>Loading planet...</p>;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <ImagesCards uid={planet.uid} type="planets"></ImagesCards>
            <h5 className="card-title">{planet.properties.name}</h5>

            <div className="card-body">
              <div className="">
                <p className="card-text">
                  Climate: {planet.properties.climate}
                </p>
                <p className="card-text">
                  Terrain: {planet.properties.terrain}
                </p>
                <p className="card-text">
                  Gravity: {planet.properties.gravity}
                </p>

                <p className="card-text">
                  Diameter: {planet.properties.diameter}
                </p>

                <p className="card-text">
                  Orbital Period: {planet.properties.orbital_period}
                </p>
                <p className="card-text">
                  Population: {planet.properties.population}
                </p>
                <p className="card-text">
                  Residents: {planet.properties.residents}
                </p>
                <p className="card-text">
                  Rotation Period : {planet.properties.rotation_period}
                </p>
                <p className="card-text">
                  Surface Water: {planet.properties.surface_water}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedPlanet;
