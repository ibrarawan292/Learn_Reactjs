import React, { useState, useEffect } from "react";
import Logout from "./logout";
// import api from './api';
import api from "./Services/Api";
function MyComponent() {
  const [data, setData] = useState("");

  useEffect(() => {
    api
      .get("/AdminDetails")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <>
 
    <div>
      <h4>email: {data.email}</h4>
      <h4>first Name: {data.firstname}</h4>
      <h4>last Name: {data.lastname}</h4>
      <h4>user Name: {data.username}</h4>
      <Logout/>
    </div>

  </>;
}

export default MyComponent;
