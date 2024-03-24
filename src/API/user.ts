import axios from "axios";
import { API_URL } from "../constants";
import { createToken } from "../common/jwt";

export const loginUser = async (data: any) => {
    try {
        const jwt = await createToken({ data: { password: data.password } });

        const response = await axios.post(`${API_URL}/users/login`, { ...data, password: jwt });
        return response.data;
    } catch (err: any) {
        console.error(err.response.data);
        return err.response.data;
    }
};
