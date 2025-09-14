import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-start">Vehicles</h2>
            <div className="wrapper d-flex mt-3">
              {state.vehicles?.map((vehicle) => (
                <div className="card vehicle-card text-start" key={vehicle.uid}>
                  <ImagesCards uid={vehicle.uid} type="vehicles"></ImagesCards>
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>

                    <Link
                      to={`/vehicle/${vehicle.uid}`}
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

export default Vehicles;
