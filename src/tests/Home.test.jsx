import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';

test('muestra el título principal del sistema', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/Sistema de Gestión de Eventos Universitarios/i)
  ).toBeInTheDocument();
});