import { useEffect, useState } from 'react';
import {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEventoAPI,
} from '../services/eventosService.js';

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const [nuevoEvento, setNuevoEvento] = useState({
    titulo: '',
    categoria: '',
    fecha: '',
    lugar: '',
    estado: '',
    imagen: '',
    descripcion: '',
  });

  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = async () => {
    const datos = await obtenerEventos();
    setEventos(datos);
  };

  const eventosFiltrados = eventos.filter((evento) => {
    const coincideTitulo = evento.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaFiltro === '' || evento.categoria === categoriaFiltro;

    return coincideTitulo && coincideCategoria;
  });

  const manejarCambio = (e) => {
    setNuevoEvento({
      ...nuevoEvento,
      [e.target.name]: e.target.value,
    });
  };

  const limpiarFormulario = () => {
    setNuevoEvento({
      titulo: '',
      categoria: '',
      fecha: '',
      lugar: '',
      estado: '',
      imagen: '',
      descripcion: '',
    });

    setModoEdicion(false);
    setIdEditando(null);
  };

  const registrarEvento = async (e) => {
    e.preventDefault();

    if (
      nuevoEvento.titulo.trim() === '' ||
      nuevoEvento.categoria.trim() === '' ||
      nuevoEvento.fecha.trim() === '' ||
      nuevoEvento.lugar.trim() === '' ||
      nuevoEvento.estado.trim() === '' ||
      nuevoEvento.imagen.trim() === '' ||
      nuevoEvento.descripcion.trim() === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (modoEdicion) {
      const eventoActualizado = await actualizarEvento(idEditando, nuevoEvento);

      setEventos(
        eventos.map((evento) =>
          evento.id === idEditando ? eventoActualizado : evento
        )
      );

      limpiarFormulario();
      return;
    }

    const eventoCreado = await crearEvento(nuevoEvento);
    setEventos([...eventos, eventoCreado]);
    limpiarFormulario();
  };

  const editarEvento = (evento) => {
    setModoEdicion(true);
    setIdEditando(evento.id);

    setNuevoEvento({
      titulo: evento.titulo,
      categoria: evento.categoria,
      fecha: evento.fecha,
      lugar: evento.lugar,
      estado: evento.estado,
      imagen: evento.imagen,
      descripcion: evento.descripcion,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const eliminarEvento = async (id) => {
    const confirmar = confirm('¿Está seguro de eliminar este evento?');

    if (confirmar) {
      await eliminarEventoAPI(id);
      setEventos(eventos.filter((evento) => evento.id !== id));
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2 className="section-title">Gestión de Eventos</h2>
        <p className="section-subtitle">
          En esta sección se pueden registrar, visualizar, buscar, actualizar y
          eliminar eventos académicos registrados en el sistema.
        </p>
      </div>

      <div className="card mb-4 professional-card">
        <div
          className={`card-header ${
            modoEdicion ? 'bg-warning' : 'bg-primary'
          } text-white`}
        >
          {modoEdicion ? 'Actualizar evento' : 'Registrar nuevo evento'}
        </div>

        <div className="card-body">
          <form onSubmit={registrarEvento}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Título del evento</label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  value={nuevoEvento.titulo}
                  onChange={manejarCambio}
                  placeholder="Ejemplo: Congreso de Tecnología"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Categoría</label>
                <select
                  className="form-select"
                  name="categoria"
                  value={nuevoEvento.categoria}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="Conferencia">Conferencia</option>
                  <option value="Taller">Taller</option>
                  <option value="Seminario">Seminario</option>
                  <option value="Charla">Charla</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={nuevoEvento.fecha}
                  onChange={manejarCambio}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Lugar</label>
                <input
                  type="text"
                  className="form-control"
                  name="lugar"
                  value={nuevoEvento.lugar}
                  onChange={manejarCambio}
                  placeholder="Ejemplo: Auditorio principal"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Estado</label>
                <select
                  className="form-select"
                  name="estado"
                  value={nuevoEvento.estado}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione un estado</option>
                  <option value="Próximo">Próximo</option>
                  <option value="En curso">En curso</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Imagen del evento</label>
                <select
                  className="form-select"
                  name="imagen"
                  value={nuevoEvento.imagen}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione una imagen</option>
                  <option value="/images/IA.jpg">Inteligencia Artificial</option>
                  <option value="/images/desarrollo_web.jpg">
                    Desarrollo Web
                  </option>
                  <option value="/images/ciberseguridad.jpg">
                    Ciberseguridad
                  </option>
                  <option value="/images/universidad.jpg">
                    Evento universitario
                  </option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  value={nuevoEvento.descripcion}
                  onChange={manejarCambio}
                  rows="3"
                  placeholder="Ingrese una breve descripción del evento"
                ></textarea>
              </div>
            </div>

            <button className="btn btn-success me-2" type="submit">
              {modoEdicion ? 'Guardar cambios' : 'Registrar evento'}
            </button>

            {modoEdicion && (
              <button
                className="btn btn-secondary"
                type="button"
                onClick={limpiarFormulario}
              >
                Cancelar
              </button>
            )}
          </form>
        </div>
      </div>

      <h4 className="section-title">Lista de eventos</h4>

      <div className="row mb-3">
        <div className="col-md-8 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar evento por título..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Conferencia">Conferencia</option>
            <option value="Taller">Taller</option>
            <option value="Seminario">Seminario</option>
            <option value="Charla">Charla</option>
          </select>
        </div>
      </div>

      <div className="row">
        {eventosFiltrados.map((evento) => (
          <div className="col-md-4 mb-4" key={evento.id}>
            <div className="card h-100 custom-card event-card">
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  borderRadius: '18px 18px 0 0',
                  backgroundColor: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={evento.imagen}
                  alt={evento.titulo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="event-category">{evento.categoria}</span>
                  <span className="badge bg-success">{evento.estado}</span>
                </div>

                <h5 className="card-title">{evento.titulo}</h5>

                <p className="card-text">{evento.descripcion}</p>

                <p className="event-date">
                  <strong>Fecha:</strong> {evento.fecha}
                </p>

                <p>
                  <strong>Lugar:</strong> {evento.lugar}
                </p>

                <div className="mt-auto">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editarEvento(evento)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarEvento(evento.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <div className="alert alert-warning">
          No se encontraron eventos con ese criterio de búsqueda.
        </div>
      )}
    </div>
  );
}

export default Eventos;