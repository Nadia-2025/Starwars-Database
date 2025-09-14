import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedVehicle } from "../services/api";
import "./App.css";

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
            <div className="row header-card mt-4">
              <div className="col-md-8 detailed-card-image border border-danger">
                <ImagesCards uid={vehicle.uid} type="vehicles"></ImagesCards>
              </div>
              <div className="col-md-4  ">
                <h5 className="card-title">{vehicle.properties.name}</h5>
                <p className="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>

            <div className="card-body">
              <div className="row text-start mt-5">
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Model Year</span>
                    <span> {vehicle.properties.model}</span>
                  </p>
                </div>

                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Cargo Capacity</span>
                    <span> {vehicle.properties.cargo_capacity}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold">Consumables</span>
                    <span> {vehicle.properties.consumables}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold">Cost in Credits</span>
                    <span> {vehicle.properties.cost_in_credits}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold">Crew</span>
                    <span> {vehicle.properties.crew}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold">Length</span>
                    <span> {vehicle.properties.length}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold">Manufacturer</span>
                    <span> {vehicle.properties.manufacturer}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Max Atmosphering Speed</span>
                    <span> {vehicle.properties.max_atmosphering_speed}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Passengers</span>
                    <span> {vehicle.properties.passengers}</span>
                  </p>
                </div>
                <div className="col  ">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Vehicle Class</span>
                    <span> {vehicle.properties.vehicle_class}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedVehicle;
