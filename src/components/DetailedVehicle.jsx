import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedVehicle } from "../services/api";

const DetailedVehicle = () => {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const data = await getDetailedVehicle(id);
        setVehicle(data);
      } catch {
        console.log("Vehicle not found");
      }
    };
    fetchVehicle();
  }, [id]);

  if (!vehicle) return <p>Loading vehicle...</p>;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <ImagesCards uid={vehicle.uid} type="vehicles"></ImagesCards>
            <h5 className="card-title">{vehicle.properties.name}</h5>

            <div className="card-body">
              <div className="">
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Pilots: {vehicle.properties.pilots}</p>
                <p className="card-text">
                  Cargo Capacity: {vehicle.properties.cargo_capacity}
                </p>
                <p className="card-text">
                  Consumables: {vehicle.properties.consumables}
                </p>

                <p className="card-text">
                  Cost in Credits: {vehicle.properties.cost_in_credits}
                </p>

                <p className="card-text">Crew: {vehicle.properties.crew}</p>

                <p className="card-text">Length: {vehicle.properties.length}</p>
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
                  Vehicle Class: {vehicle.properties.vehicle_class}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedVehicle;
