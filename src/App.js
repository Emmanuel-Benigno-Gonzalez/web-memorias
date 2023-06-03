import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'
import Memorias from './components/Memorias';
import '../src/styles/loginStyles.css';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    // Verifica el estado de inicio de sesión almacenado en el almacenamiento local
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
      setUsername('usuario'); // Establece el nombre de usuario que corresponda
    }
  }, []);


  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    // Elimina el estado de inicio de sesión del almacenamiento local al cerrar sesión
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    setUsername('');
  };

  const handleRegister = (username, password) => {
    // Aquí puedes implementar la lógica de registro de usuarios
    // Guardar los datos del usuario en una base de datos, por ejemplo
    alert(`Registrado exitosamente: ${username}`);
    setShowRegistration(false); // Ocultar el formulario de registro después del registro exitoso
  };


  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Bienvenido, {username}!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Memorias name={username}/>
        </div>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin}/>
          <RegisterForm onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default App;

