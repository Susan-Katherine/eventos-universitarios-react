import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const obtenerEventos = async () => {
  const respuesta = await axios.get(`${API_URL}/eventos`);
  return respuesta.data;
};

export const crearEvento = async (evento) => {
  const respuesta = await axios.post(`${API_URL}/eventos`, evento);
  return respuesta.data;
};

export const actualizarEvento = async (id, evento) => {
  const respuesta = await axios.put(`${API_URL}/eventos/${id}`, evento);
  return respuesta.data;
};

export const eliminarEventoAPI = async (id) => {
  await axios.delete(`${API_URL}/eventos/${id}`);
};

export const obtenerEventosAPI = async () => {
  const respuesta = await axios.get(`${API_URL}/apiEventos`);
  return respuesta.data.slice(0, 5);
};