import axios from "axios";

const API = "http://15.206.131.219:8003/api/orders";

// Get all orders
export const getOrders = async () => {
  const response = await axios.get(`${API}/`);
  return response.data;
};

// Place Order
export const placeOrder = async (orderData) => {
  const response = await axios.post(
    `${API}/create/`,
    orderData
  );

  return response.data;
};

// Get Single Order
export const getOrder = async (id) => {
  const response = await axios.get(
    `${API}/${id}/`
  );

  return response.data;
};

// Cancel Order
export const cancelOrder = async (id) => {
  const response = await axios.delete(
    `${API}/${id}/`
  );

  return response.data;
};