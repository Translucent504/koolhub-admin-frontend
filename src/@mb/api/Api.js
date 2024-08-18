import axios from "axios";

let api = axios.create({
  // baseURL: `http://110.37.220.229/portal-web/`,
  // baseURL: `http://localhost:3000/`,
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
        window.location = `${process.env.REACT_APP_VERIFY_PATH}`;
        break;
      default:
        console.log(error.response);
        //window.location = "/500"
    }
    return Promise.reject(error);
  }
);

export default api;
