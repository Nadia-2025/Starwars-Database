import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
import ImagesCards from "./ImagesCards";

const Planets = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-start">Planets</h2>
            <div className="wrapper d-flex mt-3">
              {state.planets?.map((planet) => (
                <div className="card planet-card text-start" key={planet.uid}>
                  <ImagesCards uid={planet.uid} type="planets"></ImagesCards>
                  <h5 className="card-title">{planet.name}</h5>
                  <div className="card-body">
                    {/* <div className="hide-text">
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
                        Created: {planet.properties.created}
                      </p>

                      <p className="card-text">
                        Diameter: {planet.properties.diameter}
                      </p>
                      <p className="card-text">
                        Edited: {planet.properties.edited}
                      </p>
                      <p className="card-text">
                        Films: {planet.properties.films}
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
                      <p className="card-text">URL: {planet.properties.url}</p>
                    </div> */}

                    <a href="#" className="btn btn-primary mt-2">
                      Learn more!
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planets;
