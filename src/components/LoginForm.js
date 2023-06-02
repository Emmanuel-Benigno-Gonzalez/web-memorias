// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la validación del usuario y contraseña
    // Aquí puedes implementar tu lógica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      // Guarda el estado de inicio de sesión en el almacenamiento local
      localStorage.setItem('isLoggedIn', true);
      onLogin(username);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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

