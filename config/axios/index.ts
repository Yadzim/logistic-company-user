import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ResponseError } from "./errors";
import { BASE_URL } from "../constants";
import toast from "react-hot-toast";

let instance = axios.create();

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const access_token: string = localStorage.getItem("access_token") ?? "";
  config.baseURL = BASE_URL;

  if (!config.url?.includes("user/login")) {
    config.headers.Authorization = `${access_token}`;
  }
  // config.headers!.Accept = '*/*';
  config.headers!["Content-Type"] = "application/json";

  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  new ResponseError(error);
  return Promise.reject(error);
};
const onResponse = (response: AxiosResponse): AxiosResponse => {
  switch (response.status) {
    case 201:
      // message.success("Ma'lumot qo'shildi!");
      break;
    case 200:
      if (response.config.method?.toUpperCase().includes("PUT")) {
        //     message.success("Ma'lumot o'zgartirildi!");
        // } else if (response.config.method?.toUpperCase().includes('POST')) {
        //     if (response.config.url !== "/auth/login") {
        //         //   message.success("Ma'lumot qo'shildi!");
        //     }
      }
      break;
    case 204:
      toast.success("Ma'lumot o'chirildi!");
      break;
    case 401:
      // store.dispatch(AUTH_ACTIONS.signOut())
      // logOut();
      break;
  }
  return response;
};

// function logOut() {
// message.error("Login  yoki parol xato! rtrtr");
// localStorage.removeItem("access_token");
// Navigate({ to: "/signin" });
// store.dispatch(AUTH_ACTIONS.signOut());
// }

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  new ResponseError(error);
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;
