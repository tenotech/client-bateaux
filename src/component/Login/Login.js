import React from "react";
import "./loginstyle.css";

const Login = () => {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  return (
    // making whole div dynamic
    <div className="login">
        <h1>Bateaux Pirates Djerba</h1>
        <p>Site officiel de réservation</p>
        <div className="show" onClick={google}>
          Se connecter
        </div>  
    </div>
  );
};
export default Login;
