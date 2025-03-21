import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NavbarHeader, NavbarLabel, NavbarLink, GlobalStyles, NavbarLogo } from 'components/App.styles';
import { Generos } from 'components/Generos/Generos';
import { ActorList } from 'components/Actor/ActorList';
import { ActorDetail } from 'components/Actor/ActorDetail';
import { UserProvider } from 'components/Usuarios/User';
import logoMenu from 'components/Img/LogoMenu.png'; // Importa la imagen del logo
import Footer from 'components/Footer/Footer'; // Importa el componente Footer

const App = () => {
  // Usa la instancia de Firebase de firebaseInstance.app
  return (
    <Router>
      <GlobalStyles />
      <UserProvider>
        <NavbarHeader>
          <NavbarLink to="/" end className="logo-link">
            <NavbarLogo src={logoMenu} alt="Logo" />
          </NavbarLink>
          <NavbarLink to="/generos">
            <NavbarLabel fontWeight={true} fontSize="18px">
              GÉNEROS
            </NavbarLabel>
          </NavbarLink>
          <NavbarLink to="/actores">
            <NavbarLabel fontWeight={true} fontSize="18px">
              ACTORES
            </NavbarLabel>
          </NavbarLink>
        </NavbarHeader>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/generos" element={<Generos />} />
          <Route path="/actores" element={<ActorList />} />
          <Route path="/actor/:actorId" element={<ActorDetail />} />
          {/* En este Route, el elemento UserRoutes se renderizará solo cuando la ruta coincida */}
        </Routes>

        {/* Agrega el componente Footer aquí */}
        <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;
