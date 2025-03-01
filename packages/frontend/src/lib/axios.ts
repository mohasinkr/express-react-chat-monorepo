import axios from "axios";

const api = axios.create({
    baseURL: "backend/",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default api;