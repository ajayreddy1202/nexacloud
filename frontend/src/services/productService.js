import axios from "axios";

const api = axios.create({
  baseURL: "http://15.206.131.219",
});

export const getProducts = async () => {
  const response = await api.get("/api/products/");
  console.log("Products API Response:", response.data);
  return response.data.data;
};
