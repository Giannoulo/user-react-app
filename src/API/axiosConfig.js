import axios from "axios";

export const reqresInstance = axios.create({
  baseURL: "https://reqres.in/api",
});

// reqresInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
