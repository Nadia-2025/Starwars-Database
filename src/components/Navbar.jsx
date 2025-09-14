const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                      <a className="nav-link" aria-current="page" href="#">
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
                    <button
                      className="btn btn-outline-light me-2"
                      type="submit"
                    >
                      <span className="me-3">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                      SEARCH
                    </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
