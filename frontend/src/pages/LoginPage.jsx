import React from 'react'

export const LoginPage = () => {
  return (
    <div className='loginpage'>
      <div className="loginpage-container">
        <h1>Registrate</h1>
        <div className="loginpage-fields">
          <input type="text" placeholder='Ingresa tu nombre' name="" id="" />
          <input type="Email" placeholder='Ingresa tu Email' />
          <input type="password" placeholder='Ingresa tu contraseña' />
          <button>Continuar</button>

          <p className="loginpage-login">
            Ya tienes una cuenta ? <span>Logeate aqui</span>
          </p>
          <div className="loginpage-agree">
            <input type="checkbox" name="" id="" />
            <p>Para continuar, acepto los terminos, condiciones y politicas de privacidad</p>
          </div>

        </div>
      </div>
    </div>
  )
}
