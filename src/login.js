import React, { useState } from "react";
import api from "./Services/Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("AdminLogin", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        // redirect to home page or display success message
        navigate("MyComponent")
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
