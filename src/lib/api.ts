import axios from "axios";

export const apiBaseClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

apiBaseClient.interceptors.response.use(
  (res) => res,
  (error) => {
    // if (error.response.status === 404) {
    //   return Promise.reject(error);
    // }

    // console.log(`[!!!!!!!base client error]: ${error.config.url}`);
    // console.log({ errorFetchConfig: `${error?.config?.data?.slice(0, 50)} . . .` });

    return Promise.reject(error);
  }
);
