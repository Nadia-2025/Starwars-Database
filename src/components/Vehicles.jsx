import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
const Vehicles = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-start">Vehicles</h2>
            <div className="wrapper d-flex mt-3">
              {state.vehicles.map((vehicle) => (
                <div className="card vehicle-card text-start" key={vehicle.uid}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.properties.name}</h5>

                    <div className="hide-text">
                      <p className="card-text">
                        Model: {vehicle.properties.model}
                      </p>
                      <p className="card-text">
                        Pilots: {vehicle.properties.pilots}
                      </p>
                      <p className="card-text">
                        Cargo Capacity: {vehicle.properties.cargo_capacity}
                      </p>
                      <p className="card-text">
                        Consumables: {vehicle.properties.consumables}
                      </p>

                      <p className="card-text">
                        Cost in Credits: {vehicle.properties.cost_in_credits}
                      </p>
                      <p className="card-text">
                        Created: {vehicle.properties.created}
                      </p>
                      <p className="card-text">
                        Crew: {vehicle.properties.crew}
                      </p>
                      <p className="card-text">
                        Edited: {vehicle.properties.edited}
                      </p>
                      <p className="card-text">
                        Length: {vehicle.properties.length}
                      </p>
                      <p className="card-text">
                        Manufacturer: {vehicle.properties.manufacturer}
                      </p>
                      <p className="card-text">
                        Max Atmosphering Speed :
                        {vehicle.properties.max_atmosphering_speed}
                      </p>
                      <p className="card-text">
                        Passengers: {vehicle.properties.passengers}
                      </p>
                      <p className="card-text">
                        Films: {vehicle.properties.films}
                      </p>

                      <p className="card-text">URL: {vehicle.properties.url}</p>
                      <p className="card-text">
                        Vehicle Class: {vehicle.properties.vehicle_class}
                      </p>
                    </div>

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

export default Vehicles;
