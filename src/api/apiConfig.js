import axios from "axios";
import authHeader from "../services/auth-header";

const user = JSON.parse(localStorage.getItem('user'));
// return axios.get(API_URL + "user", { headers: authHeader() });

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: authHeader(),
});

export default api;