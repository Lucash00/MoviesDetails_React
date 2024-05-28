import styled from 'styled-components';

export const ActorListContainer = styled.div`
  padding: 20px;
  background-color: #1c1c1c;
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el 100% de la altura de la ventana gráfica */
  display: flex;
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

export const ActorCard = styled.div`
  text-align: center;
  img {
    width: 185px;
    height: 278px;
    object-fit: cover;
    border-radius: 8px;
  }
  p {
    margin-top: 10px;
    color: #fff;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .actor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
