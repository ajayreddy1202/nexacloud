import axios from "axios";

const API = "http://15.206.131.219:8005/api/payments";

// Get all payments
export const getPayments = async () => {
  const response = await axios.get(`${API}/`);
  return response.data;
};

// Process payment
export const processPayment = async (data) => {
  const response = await axios.post(
    `${API}/process/`,
    data
  );

  return response.data;
};

// Get single payment
export const getPayment = async (id) => {
  const response = await axios.get(
    `${API}/${id}/`
  );

  return response.data;
};

// Get order payments
export const getOrderPayments = async (orderId) => {
  const response = await axios.get(
    `${API}/order/${orderId}/`
  );

  return response.data;
};

// Refund payment
export const refundPayment = async (id) => {
  const response = await axios.post(
    `${API}/${id}/refund/`
  );

  return response.data;
};

