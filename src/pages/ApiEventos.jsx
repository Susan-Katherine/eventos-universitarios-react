import { useEffect, useState } from 'react';
import { obtenerEventosAPI } from '../services/eventosService';

function ApiEventos() {
  const [eventosApi, setEventosApi] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarEventos = async () => {
      const datos = await obtenerEventosAPI();
      setEventosApi(datos);
      setCargando(false);
    };

    cargarEventos();
  }, []);

  return (
    <div>
      <h2 className="section-title">Integración con API REST</h2>
      <p className="section-subtitle">
        Esta sección simula la integración del frontend con una API backend
        utilizando Axios y muestra registros académicos en español.
      </p>

      {cargando ? (
        <div className="alert alert-info">Cargando datos desde la API...</div>
      ) : (
        <div className="row">
          {eventosApi.map((evento) => (
            <div className="col-md-4 mb-3" key={evento.id}>
              <div className="card h-100 custom-card">
                <div className="card-body">
                  <span className="event-category">{evento.categoria}</span>
                  <h5 className="card-title mt-2">{evento.titulo}</h5>
                  <p className="card-text">{evento.descripcion}</p>

                  <div className="alert alert-success mt-3 mb-0">
                    Datos obtenidos mediante servicio API con Axios.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApiEventos;