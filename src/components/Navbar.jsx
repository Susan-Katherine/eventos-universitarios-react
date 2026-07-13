import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="/images/logoUC.png"
            alt="Logo Universidad Continental"
            style={{
              width: '190px',
              height: '75px',
              objectFit: 'contain',
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '4px',
            }}
          />
          <span>Eventos Universitarios</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>

            <Link className="nav-link" to="/eventos">
              Eventos
            </Link>

            <Link className="nav-link" to="/participantes">
              Participantes
            </Link>

            <Link className="nav-link" to="/api-eventos">
              API REST
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;