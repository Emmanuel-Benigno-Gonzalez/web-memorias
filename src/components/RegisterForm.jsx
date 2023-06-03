// RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la lógica de registro de usuarios
    // Aquí puedes implementar tu lógica de registro de usuarios
    if (username && password) {
      onRegister(username, password);
      setUsername('');
      setPassword('');
    } else {
      alert('Ingrese un nombre de usuario y una contraseña válidos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuarios</h2>
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
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
