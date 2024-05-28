// components/Usuarios/Register.jsx
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContainer, AuthForm } from './auth.styles.js';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
      } catch (error) {
        console.error('Error al registrar usuario:', error.message);
      }
    };
  
    return (
      <AuthContainer>
        <h2 style={{ color: 'white' }}>Registro</h2>
        <AuthForm onSubmit={handleRegister}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Registrarse</button>
        </AuthForm>
      </AuthContainer>
    );
  };
  
  export default Register;