import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../Actions/auth";

interface AuthProps {
    user: any;
    token: string;
    message?: string;
    code?: number;
}

const initialState: AuthProps = {
    user: null,
    token: "",
    message: "",
    code: 0,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.message = action.payload.message;
            state.code = action.payload.code;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.message = action.error.message;
            state.code = Number(action.error.code);
        });
        builder.addCase(login.pending, (state) => {
            state.message = "Loading...";
        });
    },
});

export const selectUser = (state: { auth: AuthProps }) => state.auth.user;
export const selectToken = (state: { auth: AuthProps }) => state.auth.token;
export const selectMessage = (state: { auth: AuthProps }) => state.auth.message;

export default authSlice.reducer;
