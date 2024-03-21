import { combineSlices } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const rootReducer = combineSlices({
    auth: AuthSlice,
});

export default rootReducer;
