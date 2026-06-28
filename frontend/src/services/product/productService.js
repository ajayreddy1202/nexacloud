import axios from "axios";

const API_URL = "http://15.206.131.219:8002/api/products/";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}${id}/`);
  return response.data.data;
};