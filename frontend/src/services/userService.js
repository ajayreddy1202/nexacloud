import axios from "axios";

const API = "http://15.206.131.219:8001/api/users/profiles";

export const getProfile = async (userId) => {
  const response = await axios.get(`${API}/${userId}/`);
  return response.data;
};

export const updateProfile = async (userId, data) => {
  const response = await axios.put(
    `${API}/${userId}/update/`,
    data
  );

  return response.data;
};
