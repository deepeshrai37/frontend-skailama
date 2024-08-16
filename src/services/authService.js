import axios from "axios";

const API_URL = "https://backend-skailama-rbqq.onrender.com/api/auth";

const login = async (email, password) => {
  console.log(email, password);
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export default {
  login,
};
