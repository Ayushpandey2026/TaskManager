import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`, // backend URL
  withCredentials: true, // HttpOnly cookies
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
