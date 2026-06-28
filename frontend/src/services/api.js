import axios from "axios";

const api = axios.create({
  baseURL: "http://15.206.131.219",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;