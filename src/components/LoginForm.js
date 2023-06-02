// LoginForm.js
import React, { useState } from 'react';

const LoginForm = (props) => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la validación del usuario y contraseña
    // Aquí puedes implementar tu lógica de autenticación
    if (correo === 'usuario' && password === 'contraseña') {
      // Guarda el estado de inicio de sesión en el almacenamiento local
      localStorage.setItem('isLoggedIn', true);
      props.onLogin(correo);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;

