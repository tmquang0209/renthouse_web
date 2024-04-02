import axios from "axios";
import { API_URL } from "../constants";
import { createToken } from "../common/jwt";

export const loginUser = async (data: any) => {
    try {
        const encryptPassword = await createToken({ data: { password: data.password } });

        const response = await axios.post(`${API_URL}/users/login`, { ...data, password: encryptPassword });
        return response.data;
    } catch (err: any) {
        console.error(err.response.data);
        return err.response.data;
    }
};

export const signupUser = async (data: any) => {
    try {
        const encryptPassword = await createToken({
            data: {
                password: data.password,
            },
        });
        const encryptConfirmPassword = await createToken({
            data: {
                password: data.confirmPassword,
            },
        });

        const response = await axios.post(`${API_URL}/users/signup`, { ...data, password: encryptPassword, confirmPassword: encryptConfirmPassword });
        return response.data;
    } catch (err: any) {
        console.error(err);
        return err.response.data;
    }
};
