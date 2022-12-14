import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "https://insurance-crm-api.vercel.app/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    // roles: ["moderator", "user"]
  });
};

const login = (email, password) => {
  return axios.post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.accessToken) {
        localStorage.setItem("user", JSON.stringify(response));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
