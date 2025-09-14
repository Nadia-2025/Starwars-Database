import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

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
                    <Link
                      to={`/planet/${planet.uid}`}
                      className="btn btn-primary mt-2"
                    >
                      Learn more!
                    </Link>
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
