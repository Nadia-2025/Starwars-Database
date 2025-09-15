import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedPlanet } from "../services/api";
import "./App.css";

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

  return (
    <>
      {!planet ? (
        <div className="loading-overlay d-flex justify-content-center align-items-center p-5">
          <div className="spinner-border text-danger" role="status"></div>
          <span className="text-danger">Loading planet data...</span>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-3 my-5">
              <div className="row  mt-4">
                <div className="col-md-8  detailed-card-image border border-danger">
                  <ImagesCards uid={planet.uid} type="planets"></ImagesCards>
                </div>
                <div className="col-md-4  ">
                  <h5 className="card-title">{planet.properties.name}</h5>
                  <p className="text-start">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>

              <div className="card-body">
                <div className="row text-start mt-5">
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold"> Climate</span>
                      <span>{planet.properties.climate}</span>
                    </p>
                  </div>
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold">Terrain</span>
                      <span>{planet.properties.terrain}</span>
                    </p>
                  </div>
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold">Gravity</span>
                      <span>{planet.properties.gravity}</span>
                    </p>
                  </div>
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold">Diameter</span>
                      <span>{planet.properties.diameter}</span>
                    </p>
                  </div>
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold"> Orbital Period</span>
                      <span>{planet.properties.orbital_period}</span>
                    </p>
                  </div>
                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold"> Population</span>
                      <span>{planet.properties.population}</span>
                    </p>
                  </div>

                  <div className="col  border-end border-danger">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold"> Rotation Period</span>
                      <span>{planet.properties.rotation_period}</span>
                    </p>
                  </div>
                  <div className="col  ">
                    <p className="card-text d-flex flex-column">
                      <span className="fw-bold"> Surface Water</span>
                      <span>{planet.properties.surface_water}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedPlanet;
