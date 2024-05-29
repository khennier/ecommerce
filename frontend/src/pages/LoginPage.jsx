import React, { useState } from 'react';
import './Css/Loginpage.css';

export const LoginPage = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:"",

  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 
  const login = async () => {
    console.log("Login function executed",formData)

  }
  const signup = async () => {
    console.log("Registro function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
  }



  return (
    <div className='loginpage'>
      <div className="loginpage-container">
        <h1>{state}</h1>
        <div className="loginpage-fields">
          {state==="Registrate"?<input type="text" placeholder='Ingresa tu nombre' name="username" value={formData.username} onChange={changeHandler} />:<></>}
          <input type="email" placeholder='Ingresa tu Email' name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder='Ingresa tu contraseña' name="password" value={formData.password} onChange={changeHandler} />
          <button onClick={()=>{state==="Login"?login():signup()}}>Continuar</button>
          {state==="Registrate"?          <p className="loginpage-login">
            Ya tienes una cuenta? <span onClick={()=>{
              setState("Login")
            }}>Logeate aqui</span>
          </p>:<p className="loginpage-login">
            Queres crear una cuenta?<span onClick={()=>{
              setState("Registrate")
            }}> Click aca</span>
          </p>}

          
          <div className="loginpage-agree">
            <input type="checkbox" name="terms" id="terms" />
            <p>Para continuar, acepto los términos, condiciones y políticas de privacidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};
