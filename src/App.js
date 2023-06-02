import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import Memorias from './components/Memorias';
import '../src/styles/loginStyles.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');



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

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Bienvenido, {username}!</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Memorias/>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

