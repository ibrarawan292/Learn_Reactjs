//1st Method

// import axios from "axios";

// const instance = axios.create({
//   // baseURL: "http://45.32.136.182:6009/",
//   baseURL: "http://192.168.18.63:5000/",
//   headers: { "Content-Type": "application/json" },
// });

// instance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("access_token");
//   console.log(accessToken);
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     console.log(response, "res");
//     return response;
//   },
//   (error) => {
//     console.log(error, "error");
//     // If the access token is expired, try to refresh it
//     const originalRequest = error.config;
//     console.log(originalRequest, "originalRequest");
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refresh_token");
//       const response = instance.post("/AdminRefreshToken", {
//         refresh_token: refreshToken,
//       });
//       console.log("refresh token");
//       console.log(response);
//       localStorage.setItem("access_token", response.access_token);
//       localStorage.setItem("refresh_token", response.refresh_token);
//       instance.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${response.data.access_token}`;
//       return instance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;

//2nd Method
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://45.32.136.182:6009/",
  baseURL: "http://192.168.18.63:5000",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response, "response");
    return response;
  },
  async (error) => {
    console.log(error.response.status, "error");
    const originalRequest = error.config;
    console.log(originalRequest, "originalRequest");
    // If the access token is expired, try to refresh it
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      // Send a request to the server to refresh the access token
      const response = await instance.post("/AdminRefreshToken", {
        token: refreshToken,
      });
      // Save the new access token
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("token", response.data.refresh_token);
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;

//3rd method ---->>>>

// import axios from "axios";
// import { redirect, useNavigate } from "react-router-dom";

// const instance = axios.create({
//   baseURL: "http://192.168.18.63:5000",
//   headers: { "Content-Type": "application/json" },
// });

// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("access_token");

//     console.log(config, "ibrar");
//     // Add the access token to the request header if it exists
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => {
//     console.log(response, "res")
//     return response;
//   },
//   error => {
//     console.log(error, "error");
//     // If the access token is expired, try to refresh it
//     if (
//       error.response.data.status === 403
//     ) {

//       const refreshToken = localStorage.getItem("refresh_token");
//       // Send a request to the server to refresh the access token
//       return instance
//         .post("/AdminRefreshToken", {
//           refresh_token: refreshToken,
//         })
//         .then((response) => {
//           console.log(response, "refresh token");
//           // Save the new access token
//           localStorage.setItem("access_token", response.data.access_token);
//           // Retry the original request
//           const config = error.config;
//           config.headers.Authorization = `Bearer ${response.data.access_token}`;
//           return instance(config);
//         });
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;
