import axios from "axios";

let apiClient = axios.create({
  baseURL: "https://localhost:7237/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
