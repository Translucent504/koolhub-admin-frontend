import axios from "axios";

let apiClient = axios.create({
  baseURL: "https://localhost:64309/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
