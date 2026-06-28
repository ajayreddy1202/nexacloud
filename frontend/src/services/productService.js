import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(
    "http://15.206.131.219:8002/api/products/"
  );

  return response.data.data;
};