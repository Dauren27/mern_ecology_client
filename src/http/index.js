import axios from "axios";

export const API_URL = `https://mern-ecology-server.onrender.com/api`;
export const API_URL_TWO = `https://mern-ecology-server.onrender.com`;
export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});
