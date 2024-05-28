import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px; // Ajusta la altura de la barra de navegación según tus necesidades
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 6px;
  padding-bottom: 2px;
  color: #fff;
  background-color: #181818;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavbarLink = styled(NavLink)`
  color: #ffc300;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-weight: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    color: #000 !important;
    text-decoration: none;
    background-color: #ffc300;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  &.active {
    color: #ffc300;
    font-weight: bold;
  }

  &.logo-link {

    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const NavbarLogo = styled.img`
  height: 75px; // Ajusta la altura del logo según tus necesidades
  max-height: 100%; // Limita la altura al tamaño original de la imagen
  padding: 0;
`;

export const NavbarLabel = styled.span`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 100%; // Ajusta la altura del área del enlace
  padding: 0 15px;
`;





export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
  }

  a {
    text-decoration: none !important;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

