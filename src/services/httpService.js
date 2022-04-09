import axios from "axios";
import logService from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Intersect response and requests
axios.interceptors.response.use(null, (err) => {
  if (!err.response)
    return logService.error(
      "Something went wrong on our side. Please try again later."
    );

  // expected error. Error sent from backend
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedError) {
    logService.log(err);
    return logService.error(err);
  }
  return Promise.reject(err.response.data); //return the error to the try catch block
});

// setting header x-auth-token
const setAuthToken = (authToken) => {
  axios.defaults.headers.common["x-auth-token"] = authToken;
};

// request.headers["x-auth-token"] = authToken;

const get = (endpoint) => {
  return axios.get(endpoint);
};

const post = (endpoint, data) => {
  return axios.post(endpoint, data);
};

const put = (endpoint, data) => {
  return axios.put(endpoint, data);
};

const del = (endpoint) => {
  return axios.delete(endpoint);
};

const http = { get, post, put, del, setAuthToken };

export default http;
