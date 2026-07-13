import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="row align-items-center">
          <div className="col-md-7">
            <span className="hero-badge">
              Universidad Continental | Plataforma académica
            </span>

            <h1>Sistema de Gestión de Eventos Universitarios</h1>

            <p>
              Aplicación web desarrollada con React para administrar
              conferencias, talleres, seminarios, participantes e integración
              con servicios REST desde una interfaz moderna, clara y responsive.
            </p>

            <div className="hero-actions">
              <Link to="/eventos" className="btn btn-light me-2">
                Gestionar eventos
              </Link>

              <Link to="/participantes" className="btn btn-outline-light">
                Ver participantes
              </Link>
            </div>
          </div>

          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src="/images/universidad.jpg"
              alt="Universidad Continental"
              className="hero-university-image"
            />
          </div>
        </div>
      </section>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-number">3+</div>
            <h5>Eventos activos</h5>
            <p className="text-muted">
              Conferencias, talleres y seminarios registrados en el sistema.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">2+</div>
            <h5>Participantes</h5>
            <p className="text-muted">
              Estudiantes y docentes inscritos en eventos académicos.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="stat-card">
            <div className="stat-icon">🔗</div>
            <div className="stat-number">API</div>
            <h5>Integración REST</h5>
            <p className="text-muted">
              Consumo de datos académicos usando Axios y servicios separados.
            </p>
          </div>
        </div>
      </div>

      <h3 className="section-title">Funcionalidades principales</h3>
      <p className="section-subtitle">
        El sistema está organizado en módulos para facilitar la gestión de la
        información académica.
      </p>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="feature-card professional-card">
            <h5>Gestión de eventos</h5>
            <p>
              Permite registrar, visualizar, buscar, actualizar y eliminar
              eventos académicos de manera sencilla.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="feature-card professional-card">
            <h5>Gestión de participantes</h5>
            <p>
              Permite inscribir estudiantes y docentes, además de consultar la
              lista de inscritos por evento.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="feature-card professional-card">
            <h5>Pruebas y calidad</h5>
            <p>
              Incluye pruebas frontend con Vitest y React Testing Library para
              validar el funcionamiento de componentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;