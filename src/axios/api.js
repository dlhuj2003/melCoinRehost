import axios from "axios";

export const getToken = (type) =>
  type == "user"
    ? `Bearer ${localStorage.getItem("token")}`
    : type == "admin"
    ? `Bearer ${localStorage.getItem("admin")}`
    : "";
export const setToken = (type, token) => localStorage.setItem(type, token);
export const melAPI = axios.create({
  baseURL: "http://localhost:5000/api/users/",
  // baseURL: "https://melb.onrender.com/api/users/",
});

export const adminAPI = axios.create({
  baseURL: "http://localhost:5000/api/admin/",
  // baseURL: "https://melb.onrender.com/api/admin/",
});
