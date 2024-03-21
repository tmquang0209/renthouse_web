import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../Actions/auth";

interface AuthProps {
    user: any;
    token: string;
    message: string;
}

const initialState: AuthProps = {
    user: null,
    token: "",
    message: "",
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
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.message = action.payload.message;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.message = action.error.message || "";
        });
    },
});

export const selectUser = (state: { auth: AuthProps }) => state.auth.user;
export const selectToken = (state: { auth: AuthProps }) => state.auth.token;
export const selectMessage = (state: { auth: AuthProps }) => state.auth.message;

export default authSlice.reducer;
