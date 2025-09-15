import { useGlobalReducer } from "../context/StoreContext";
import SearchBar from "./SearchBar";

useGlobalReducer;
const Navbar = () => {
  const { state, dispatch } = useGlobalReducer();
  return (
    <>
      <div className="container-fluid" style={{ paddingTop: "120px" }}>
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img
                    src="/images/logo-starwars.jpg"
                    alt="Logo de la página"
                    width="150"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        NEWS+FEATURES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        DATABANK
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FILMS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        SERIES
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        VIDEOS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        GAMES+INTERACTIVE
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <div className="dropdown">
                      <button
                        className="btn btn-danger me-2  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <span className="me-3">
                          <i className="fa-regular fa-heart"></i>
                        </span>
                        FAVORITES ({state.favorites.length})
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        {state.favorites.length === 0 ? (
                          <li className="dropdown-item text-muted">
                            No favorites
                          </li>
                        ) : (
                          state.favorites.map((fav) => (
                            <li
                              key={fav.uid}
                              className="dropdown-item d-flex justify-content-between align-items-center"
                            >
                              {fav.name}
                              <button
                                className="btn btn-sm btn-danger ms-2"
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FAVORITE",
                                    payload: fav.uid,
                                  })
                                }
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>

                    <button className="btn btn-outline-light" type="submit">
                      <span className="me-3">
                        <i className="fa-regular fa-user"></i>
                      </span>
                      LOG IN
                    </button>
                  </form>
                </div>
              </div>
            </nav>
            <div className="d-flex justify-content-center align-items-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
