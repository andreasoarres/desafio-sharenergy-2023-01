import "./Login.css";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export function Login() {
  const [email, setEmail] = useState(localStorage.email || null);
  const [password, setPassword] = useState(localStorage.password || null);
  const [isChecked, setIsChecked] = useState(localStorage.checkbox || true);
  const history = useNavigate();

  const validaLogin = (event) => {
    event.preventDefault();
  

    if (isChecked && email !== ""){
      localStorage.email = email
      localStorage.password = password
      localStorage.checkbox = isChecked
    }
    
    if (email === "desafiosharenergy" && password === "sh@r3n3rgy") {
      console.log("/clientes");
      history('/cliente');
    } else {
      console.log("não passou");

    }
  };

  return (
    <div className="Login">
      <header className="app-header" />
      <div className="login-form-wrap">
        <h2>Login</h2>
        <form className="login-forme">
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            placeholder="email"
            required
          />

          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            placeholder="Password"
            required
          />
          <div className="form-check">
            <input type="checkbox" checked={isChecked} onChange={event => setIsChecked(!isChecked)}/> 
            <label>Lembrar-me</label>
          </div>
          <button
            type="submit"
            onClick={(event) => validaLogin(event)}
            className="btn-login"
          >
            Login
          </button>
        </form>
      </div>
      <header />
    </div>
  );
}

export default Login;
