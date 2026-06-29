import axios from "axios";

const API = "http://15.206.131.219:8004/api/notifications";

export const sendNotification = async (data) => {
  const response = await axios.post(
    `${API}/send/`,
    data
  );

  return response.data;
};

export const getNotifications = async () => {
  const response = await axios.get(`${API}/`);

  return response.data;
};

export const getUserNotifications = async (userId) => {
  const response = await axios.get(
    `${API}/user/${userId}/`
  );

  return response.data;
};

export const getNotification = async (id) => {
  const response = await axios.get(
    `${API}/${id}/`
  );

  return response.data;
};
