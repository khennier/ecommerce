import React from 'react';
import './Css/Loginpage.css';

export const LoginPage = () => {
  return (
    <div className='loginpage'>
      <div className="loginpage-container">
        <h1>Registrate</h1>
        <div className="loginpage-fields">
          <input type="text" placeholder='Ingresa tu nombre' name="name" />
          <input type="email" placeholder='Ingresa tu Email' name="email" />
          <input type="password" placeholder='Ingresa tu contraseña' name="password" />
          <button>Continuar</button>
          
          <p className="loginpage-login">
            Ya tienes una cuenta? <span>Logeate aqui</span>
          </p>
          <div className="loginpage-agree">
            <input type="checkbox" name="terms" id="terms" />
            <p>Para continuar, acepto los términos, condiciones y políticas de privacidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};
