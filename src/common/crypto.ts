import * as CryptoJS from "crypto-js";

const privateKey: string = process.env.REACT_APP_CRYPTO_KEY || "";
const privateIv: string = process.env.REACT_APP_CRYPTO_IV || "";

const aesEncrypt = (data: string) => {
    const key = CryptoJS.enc.Utf8.parse(privateKey);
    const iv = CryptoJS.enc.Utf8.parse(privateIv);

    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString();
};

const aesDecrypt = (encrypted: string) => {
    const key = CryptoJS.enc.Utf8.parse(privateKey);
    const iv = CryptoJS.enc.Utf8.parse(privateIv);

    // Directly decrypt the base64-encoded string
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};

export { aesEncrypt, aesDecrypt };
