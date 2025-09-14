import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedCharacter } from "../services/api";
import "./App.css";

const DetailedCharacter = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getDetailedCharacter(id);
        setCharacter(data);
      } catch {
        console.log("Character not found");
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading character...</p>;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="row header-card mt-4">
              <div className="col-md-8 detailed-card-image border border-danger">
                <ImagesCards
                  uid={character.uid}
                  type="characters"
                ></ImagesCards>
              </div>

              <div className="col-md-4 description ">
                <h5 className="card-title">{character.properties.name}</h5>
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
                    <span className="fw-bold"> Birth-year</span>
                    <span>{character.properties.birth_year}</span>
                  </p>
                </div>
                <div className="col border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Eye Color</span>
                    <span>Eye-color {character.properties.eye_color}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Hair Color</span>
                    <span>{character.properties.hair_color}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Gender</span>
                    <span>{character.properties.gender}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Height</span>
                    <span>{character.properties.height}</span>
                  </p>
                </div>
                <div className="col  border-end border-danger">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Mass</span>
                    <span>{character.properties.mass}</span>
                  </p>
                </div>
                <div className="col">
                  <p className="card-text d-flex flex-column">
                    <span className="fw-bold"> Skin Color</span>
                    <span>{character.properties.skin_color}</span>
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

export default DetailedCharacter;
