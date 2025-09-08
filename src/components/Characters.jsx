import { useGlobalReducer } from "../context/StoreContext";
const Characters = () => {
  const { state } = useGlobalReducer();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {state.characters.map((character) => (
              <div className="card" key={character.uid}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{character.name} title</h5>
                  <p className="card-text">Birth-year:{character.birth_year}</p>
                  <p className="card-text">Eye-color: {character.eye_color}</p>
                  <p className="card-text">Films: {character.films}</p>
                  <p className="card-text">Gender: {character.gender}</p>
                  <p className="card-text">
                    Hair-color: {character.hair_color}
                  </p>
                  <p className="card-text">Height: {character.height}</p>
                  <p className="card-text">Homeworld: {character.homeworld}</p>
                  <p className="card-text">Mass: {character.mass}</p>
                  <p className="card-text">
                    Skin color: {character.skin_color}
                  </p>
                  <p className="card-text">Created: {character.created}</p>
                  <p className="card-text">Edited: {character.edited}</p>
                  <p className="card-text">Spicies: {character.species}</p>
                  <p className="card-text">Starships: {character.starships}</p>
                  <p className="card-text">URL: {character.url}</p>
                  <a href="#" className="btn btn-primary">
                    Learn more!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
