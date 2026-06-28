import axios from "axios";

const API = "http://15.206.131.219:8000/api/auth";

export const loginUser = async (data) => {
  const response = await axios.post(
    `${API}/login/`,
    data
  );

  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post(
    `${API}/register/`,
    data
  );

  return response.data;
};