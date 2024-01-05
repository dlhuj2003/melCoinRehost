import axios from "axios";

const getToken = (type) =>
  type == "user"
    ? `Bearer ${localStorage.getItem("token")}`
    : type == "admin"
    ? `Bearer ${localStorage.getItem("admin")}`
    : "";

export const melAPI = axios.create({
  //   baseURL: "https://dailyp.onrender.com/api/users/",
  // baseURL: "http://localhost:5000/api/users/",
  baseURL: "https://melb.onrender.com/api/users/",
});

export const adminAPI = axios.create({
  //   baseURL: "https://dailyp.onrender.com/api/admin/",
  // baseURL: "http://localhost:5000/api/admin/",
  baseURL: "https://melb.onrender.com/api/admin/"
});
