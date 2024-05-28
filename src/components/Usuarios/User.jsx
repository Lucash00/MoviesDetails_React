// components/Usuarios/User.jsx
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import { AuthContainer, AuthForm } from './auth.styles.js';

const UserContext = React.createContext();

const User = () => {
  return (
    <AuthContainer>
      <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '20px' }}>Identificarse</h1>
      <AuthForm>
        <Link to="registro">
          <button type="button" style={{ backgroundColor: '#ffc300', color: 'white', fontWeight: 'bold', padding: '12px 20px', borderRadius: '8px', marginBottom: '8px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}>
            Registro
          </button>
        </Link>
        <Link to="inicio-sesion">
          <button type="button" style={{ backgroundColor: '#ffc300', color: 'white', fontWeight: 'bold', padding: '12px 20px', borderRadius: '8px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}>
            Inicio de Sesión
          </button>
        </Link>
      </AuthForm>
      <hr />
      <Outlet />
    </AuthContainer>
  );
};

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Selecciona una opción</h1>} />
      <Route path="registro" element={<Register />} />
      <Route path="inicio-sesion" element={<Login />} />
    </Routes>
  );
};

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { User, UserRoutes, UserProvider , UserContext };