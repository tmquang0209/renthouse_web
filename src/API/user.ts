import axios from "axios";
import { API_URL } from "../constants";

export const loginUser = async (data: any) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, data);
        return response.data;
    } catch (err: any) {
        return err.response.data;
    }
};
