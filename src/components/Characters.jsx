import { useGlobalReducer } from "../context/StoreContext";
import ImagesCards from "./ImagesCards";
import { Link } from "react-router-dom";

const Characters = () => {
  const { state } = useGlobalReducer();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 m-5">
            <h4 className="text-start">Databank | Characters</h4>
            <div className="main-card-wrapper d-flex mt-3">
              {state.characters?.map((character) => (
                <div
                  className="card border border-danger character-card text-start"
                  key={character.uid}
                >
                  <div className="main-card-image">
                    <ImagesCards
                      uid={character.uid}
                      type="characters"
                    ></ImagesCards>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title p-3">{character.name}</h5>
                    <div className=" d-flex justify-content-between">
                      <Link
                        to={`/people/${character.uid}`}
                        className="btn btn-dark mt-2"
                      >
                        Learn more!
                      </Link>
                      <button className="btn btn-danger">
                        <i class="fa-regular fa-heart"></i>
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

export default Characters;
