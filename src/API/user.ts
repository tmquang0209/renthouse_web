import { aesEncrypt } from "../common/crypto";
import client from "./client";

export const loginUser = async (data: any) => {
    try {
        const encryptPassword = aesEncrypt(data.password);

        const response = await client.post(`/users/login`, { ...data, password: encryptPassword });
        console.log(response.data);

        return response.data;
    } catch (err: any) {
        console.error(err.response.data);
        return err.response.data;
    }
};

export const signupUser = async (data: any) => {
    try {
        const encryptPassword = aesEncrypt(data.password);
        const encryptConfirmPassword = aesEncrypt(data.confirmPassword);

        const response = await client.post(`/users/signup`, { ...data, password: encryptPassword, confirmPassword: encryptConfirmPassword });
        return response.data;
    } catch (err: any) {
        console.error(err);
        return err.response.data;
    }
};

export const verifyUser = async (data: any) => {
    try {
        const response = await client.post(`/users/verifyAccount`, { ...data });
        return response.data;
    } catch (err: any) {
        console.error(err.response.data);
        return err.response.data;
    }
};

export const resendVerifyCode = async (data: any) => {
    try {
        const response = await client.post(`/users/resendCode`, { ...data });
        return response.data;
    } catch (err: any) {
        console.error(err.response.data);
        return err.response.data;
    }
};
