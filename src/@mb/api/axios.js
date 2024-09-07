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
    // whatever you want to do with the error
    //debugger;
    switch (error.response.status) {
      case 401:
        clearAuthentication();
        break;
      default:
        console.log(error.response);
      //window.location = "/500"
    }
    return Promise.reject(error);
  }
);

export default api;
