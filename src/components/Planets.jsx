import { useGlobalReducer } from "../context/StoreContext";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

const Planets = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 m-5">
            <h4 className="text-start">Databank | Planets</h4>
            <div className="main-card-wrapper d-flex mt-3">
              {state.planets?.map((planet) => (
                <div
                  className="card  border border-danger planet-card text-start"
                  key={planet.uid}
                >
                  <div className="main-card-image">
                    <ImagesCards uid={planet.uid} type="planets"></ImagesCards>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title p-3">{planet.name}</h5>
                    <div className=" d-flex justify-content-between">
                      <Link
                        to={`/planet/${planet.uid}`}
                        className="btn btn-dark mt-2"
                      >
                        Learn more!
                      </Link>
                      <button className="btn btn-danger">
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </div>
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
