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
export const signInUser = async (data: any) => {
    try {
        const jwt = await createToken({ data: { password: data.password }, time: "40m" });
        console.log("data:", { ...data, password: jwt, confirmPassword: jwt });
        const response = await axios.post(`${API_URL}/users/signup`, { ...data, password: jwt, confirmPassword: jwt });
        console.log("Thành công");
        return response.data;
    } catch (err: any) {
        throw new Error(`Lỗi ${err}`);
    }
}


