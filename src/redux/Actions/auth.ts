import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../API/user";

export const login = createAsyncThunk("auth/login", async (data: any) => {
    try {
        const response = await loginUser(data);
        return response.data;
    } catch (err: any) {
        console.error(err);
        return err.response.data;
    }
});
