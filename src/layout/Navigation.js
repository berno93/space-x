import { Link } from 'react-router-dom';
// import '../styles/navbar.css';

const Navigation = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%", height: "80px" }}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" >
              <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/spacex_logo_icon_144865.png" style={{ width: "80px", }}></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/members" className="nav-link">
                  Membres d'équipage de Dragon
                </Link>
                <Link to="/historique" className="nav-link">
                  Historique de SpaceX
                </Link>
                <Link to="/info" className="nav-link">
                  SpaceX en tant qu'entreprise
                </Link>
                <Link to="/fusee" className="nav-link">
                  Versions de fusées SpaceX
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {children}
    </>
  );
};
export default Navigation;
