import axios from "axios";
import { clearAuthentication } from "features/auth/service";

let apiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        clearAuthentication();
        break;
      default:
        console.log(error.response);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
