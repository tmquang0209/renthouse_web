import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../Actions/auth";
import { userStatusCode } from "../../../constants/statusCode";
import { AuthProps } from "../../../constants/interface";

const initialState: AuthProps = {
    user: null,
    token: "",
    message: "",
    code: 0,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = "";
        },
        logout: (state) => {
            state.user = null;
            state.token = "";
            state.message = "";
            state.code = 0;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.data.user;
            state.token = action.payload.data.token;
            state.code = action.payload.code;
            state.message = userStatusCode[action.payload.code as keyof typeof userStatusCode];
            state.success = action.payload.success || false;
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

export const { clearMessage, logout } = authSlice.actions;

export const selectUser = (state: { auth: AuthProps }) => state.auth.user;
export const selectToken = (state: { auth: AuthProps }) => state.auth.token;
export const selectMessage = (state: { auth: AuthProps }) => state.auth.message;
export const selectCode = (state: { auth: AuthProps }) => state.auth.code;
export const selectSuccess = (state: { auth: AuthProps }) => state.auth.success;

export default authSlice.reducer;
