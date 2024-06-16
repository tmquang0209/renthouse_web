import axios from "axios";
import { API_URL } from "../constants";
import { useAppSelector } from "../hooks";
import { selectToken } from "../redux/Reducer/AuthSlice";
import { store } from "../redux";

const client = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.request.use(
    async (config) => {
        const token = store.getState().auth.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error(error);

        return Promise.reject(error);
    },
);

export default client;
