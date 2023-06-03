import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false);
  const changeForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
      {showLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm} />}
    </div>
  );
}
