import * as jose from "jose";
import { tokenProps } from "../constants/interface";

const SECRET_KEY = new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET);

export const createToken = async ({ data, time }: tokenProps) => {
    // console.log(data);
    
    try {
        const jwt = await new jose.SignJWT({ ...data })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime(time || "1m")
            .sign(SECRET_KEY);
        return jwt;
    } catch (err: any) {
        console.error("Loi :",err);
        return err;
    }
};
