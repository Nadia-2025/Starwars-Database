import { useParams } from "react-router-dom";
import ImagesCards from "./ImagesCards";
import { useEffect, useState } from "react";
import { getDetailedCharacter } from "../services/api";

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
            <ImagesCards uid={character.uid} type="characters"></ImagesCards>
            <h5 className="card-title">{character.properties.name}</h5>

            <div className="card-body">
              <div className="">
                <p className="card-text">
                  Birth-year: {character.properties.birth_year}
                </p>
                <p className="card-text">
                  Eye-color: {character.properties.eye_color}
                </p>
                <p className="card-text">
                  Gender: {character.properties.gender}
                </p>

                <p className="card-text">
                  Hair-color: {character.properties.hair_color}
                </p>
                <p className="card-text">
                  Height: {character.properties.height}
                </p>
                <p className="card-text">
                  Homeworld: {character.properties.homeworld}
                </p>
                <p className="card-text">Mass: {character.properties.mass}</p>
                <p className="card-text">
                  Skin color: {character.properties.skin_color}
                </p>
                <p className="card-text">
                  Created: {character.properties.created}
                </p>
                <p className="card-text">
                  Edited: {character.properties.edited}
                </p>
                <p className="card-text">
                  Species: {character.properties.species}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCharacter;
