import { useGlobalReducer } from "../context/StoreContext";
import "./CardStyle.css";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

const Characters = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-start">Characters</h2>
            <div className="wrapper d-flex mt-3">
              {state.characters?.map((character) => (
                <div
                  className="card character-card text-start"
                  key={character.uid}
                >
                  <ImagesCards
                    uid={character.uid}
                    type="characters"
                  ></ImagesCards>
                  <h5 className="card-title">{character.name}</h5>

                  <Link
                    to={`/people/${character.uid}`}
                    className="btn btn-primary mt-2"
                  >
                    Learn more!
                  </Link>
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
