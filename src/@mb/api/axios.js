import axios from "axios";
import { clearAuthentication } from "features/auth/service";

let api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        clearAuthentication(api);
        break;
      default:
        console.log(error.response);
    }
    return Promise.reject(error);
  }
);

export default api;
