import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: #1c1c1c;
  color: #fff;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana gráfica */
`;

export const SectionContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Carousel = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
  scroll-behavior: smooth;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 10px 0 0; 
  padding: 10px;
  color: #FFC300; /* Cambiado a tu color deseado */
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Netflix Sans', sans-serif; 
  text-align: left;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2; 

  background: linear-gradient(45deg, #e50914, #db0510); 
  -webkit-background-clip: text;
`;
