import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";

const rootReducer = combineSlices({
    auth: authSlice,
});

export default rootReducer;
