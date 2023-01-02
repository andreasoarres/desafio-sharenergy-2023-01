import "./Login.css"

function Login() {
    return (
     <div className="Login">
        <header className="app-header"/>
        <div className="login-form-wrap"> 
            <h2>Login</h2>
            <form className="login-forme">
                <input type="email" name="email" placeholder="email" required/>
                <input type="password" name="password" placeholder="Password" required /> 
                <button type="submit" className="btn-login">Login</button>
             </form>
             </div>   
        <header/> 
     </div>
    );
  }
  
  export default Login;
  