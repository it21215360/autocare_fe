import React from "react";
import "./CourierLogin.css";

function CourierLogin() {
  
  return (
    <div className="login-page">
      <form>
        <div className="cover">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <div className="login-btn" onClick="login">Login</div>
        </div>
      </form>
    </div>
  )
}

export default CourierLogin
