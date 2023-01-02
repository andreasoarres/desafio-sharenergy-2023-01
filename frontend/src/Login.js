import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const validaLogin = (event) => {
    event.preventDefault();

    if (email === "desafiosharenergy" && password === "sh@r3n3rgy") {
      console.log("passou");
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
          <button type="submit" onClick={event => validaLogin(event)} className="btn-login">
            Login
          </button>
        </form>
      </div>
      <header />
    </div>
  );
}

export default Login;
