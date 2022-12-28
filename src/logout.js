import React from 'react';
import api from './Services/Api'
import { useNavigate } from "react-router-dom";
function Logout() {
  
  let navigate = useNavigate();
    const handleClick = event => {
      event.preventDefault();
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      delete api.defaults.headers.common['Authorization'];
      // redirect to login page
      navigate("/")
    };
  
    return (
      <button onClick={handleClick}>Logout</button>
    );
  }

export default Logout;