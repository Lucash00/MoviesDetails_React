// auth.styles.js
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #1c1c1c; /* Color de fondo grisaceo similar al de Home */
  color: #fff;
`;

export const AuthForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    color: white; /* Texto en blanco */
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: white;
    color: #1c1c1c; /* Texto en color de fondo grisaceo */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const AuthHeader = styled.h2`
  margin-bottom: 20px;
  color: white; /* Texto en blanco */
`;
