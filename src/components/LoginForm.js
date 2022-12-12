import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://hospital-view-rails-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    })
    .then((r) => r.json())
    .then((patient) => onLogin(patient));
      }
  
  

  return (
    <div id="login" align="center">
        <h2 style={{color: "#A23A36"}}>Welcome To HospiView</h2>
        <h3 style={{color: "#A23A36"}}>Please Login!</h3>
    <form id="login-input"  onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Submit
        </button>
    </form>
    </div>
  );
}

export default LoginForm;
