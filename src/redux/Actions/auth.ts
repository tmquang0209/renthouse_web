import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../API/user";

export const login = createAsyncThunk("auth/login", loginUser);
