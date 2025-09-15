import { useGlobalReducer } from "../context/StoreContext";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

const Planets = () => {
  const { state, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  mx-2 my-5">
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
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: "ADD_FAVORITE",
                            payload: {
                              uid: `${planet.uid}-planet`,
                              name: planet.name,
                              type: "planet",
                            },
                          })
                        }
                      >
                        <i className="fa-regular fa-heart"></i>
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
