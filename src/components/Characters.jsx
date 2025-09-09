import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
const Characters = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-start">Characters</h2>
            <div className="wrapper d-flex mt-3">
              {state.characters.map((character) => (
                <div
                  className="card character-card text-start"
                  key={character.uid}
                >
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{character.properties.name}</h5>

                    <div className="hide-text">
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
                        Films: {character.properties.films}
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
                      <p className="card-text">
                        Mass: {character.properties.mass}
                      </p>
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
                      <p className="card-text">
                        Starships: {character.properties.starships}
                      </p>
                      <p className="card-text">
                        URL: {character.properties.url}
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

export default Characters;
