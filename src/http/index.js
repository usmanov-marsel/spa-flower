import axios from "axios";

export const API_URL = `https://localhost:8000/api`;
const APP_URL = "https://localhost:3000";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error);
    if (error.request.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      return (window.location = "/login");
    }
    throw error;
  }
);
