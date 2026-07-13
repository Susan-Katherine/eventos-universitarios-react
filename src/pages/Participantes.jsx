import { useState } from 'react';

function Participantes() {
  const [participantes, setParticipantes] = useState([
    {
      id: 1,
      nombres: 'Carlos Ramírez',
      correo: 'carlos.ramirez@continental.edu.pe',
      tipo: 'Estudiante',
      evento: 'Conferencia de Inteligencia Artificial',
    },
    {
      id: 2,
      nombres: 'María Quispe',
      correo: 'maria.quispe@continental.edu.pe',
      tipo: 'Docente',
      evento: 'Taller de Desarrollo Web con React',
    },
  ]);

  const [nuevoParticipante, setNuevoParticipante] = useState({
    nombres: '',
    correo: '',
    tipo: '',
    evento: '',
  });

  const manejarCambio = (e) => {
    setNuevoParticipante({
      ...nuevoParticipante,
      [e.target.name]: e.target.value,
    });
  };

  const registrarParticipante = (e) => {
    e.preventDefault();

    if (
      nuevoParticipante.nombres.trim() === '' ||
      nuevoParticipante.correo.trim() === '' ||
      nuevoParticipante.tipo.trim() === '' ||
      nuevoParticipante.evento.trim() === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const participanteAgregado = {
      id: Date.now(),
      ...nuevoParticipante,
    };

    setParticipantes([...participantes, participanteAgregado]);

    setNuevoParticipante({
      nombres: '',
      correo: '',
      tipo: '',
      evento: '',
    });
  };

  const eliminarParticipante = (id) => {
    const confirmar = confirm('¿Está seguro de eliminar este participante?');

    if (confirmar) {
      const nuevaLista = participantes.filter(
        (participante) => participante.id !== id
      );
      setParticipantes(nuevaLista);
    }
  };

  return (
    <div>
      <h2>Gestión de Participantes</h2>
      <p>
        En esta sección se registran participantes, se inscriben en eventos y se
        consulta la lista de inscritos.
      </p>

      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white">
          Registrar participante
        </div>

        <div className="card-body">
          <form onSubmit={registrarParticipante}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Nombres y apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombres"
                  value={nuevoParticipante.nombres}
                  onChange={manejarCambio}
                  placeholder="Ejemplo: Ana Torres"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Correo institucional</label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  value={nuevoParticipante.correo}
                  onChange={manejarCambio}
                  placeholder="ejemplo@continental.edu.pe"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Tipo de participante</label>
                <select
                  className="form-select"
                  name="tipo"
                  value={nuevoParticipante.tipo}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Estudiante">Estudiante</option>
                  <option value="Docente">Docente</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Evento</label>
                <select
                  className="form-select"
                  name="evento"
                  value={nuevoParticipante.evento}
                  onChange={manejarCambio}
                >
                  <option value="">Seleccione un evento</option>
                  <option value="Conferencia de Inteligencia Artificial">
                    Conferencia de Inteligencia Artificial
                  </option>
                  <option value="Taller de Desarrollo Web con React">
                    Taller de Desarrollo Web con React
                  </option>
                  <option value="Seminario de Ciberseguridad">
                    Seminario de Ciberseguridad
                  </option>
                </select>
              </div>
            </div>

            <button className="btn btn-success" type="submit">
              Inscribir participante
            </button>
          </form>
        </div>
      </div>

      <h4>Lista de participantes inscritos</h4>

      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-primary">
            <tr>
              <th>Nombres</th>
              <th>Correo</th>
              <th>Tipo</th>
              <th>Evento inscrito</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {participantes.map((participante) => (
              <tr key={participante.id}>
                <td>{participante.nombres}</td>
                <td>{participante.correo}</td>
                <td>{participante.tipo}</td>
                <td>{participante.evento}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarParticipante(participante.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Participantes;