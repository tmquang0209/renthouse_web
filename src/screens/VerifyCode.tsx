import React, {useEffect, useState } from "react";
import { ButtonComponent, Container, Header, Line } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { resendVerifyCode, verifyUser } from "../API/user";
import { userStatusCode } from "../constants/statusCode";
import { Alert, Input, Spin } from "antd";

import { SyncOutlined } from "@ant-design/icons";

const VerifyCode = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const email = location.state?.email;

    if (!email) {
        navigation("/");
    }
    const [loading, setLoading] = useState<boolean>(false);
    const [code, setCode] = useState<String>();

    const [verificationResult, setVerificationResult] = useState<string>("");

    const onChange = (text: any) => {
        setCode(text);
    };
    const sharedProps = {
        onChange,
    };

    const [loadingResendCode, setLoadingResendCode] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(60);

    const handleResendCode = async () => {
        setLoadingResendCode(true);
        try {
            const response = await resendVerifyCode({ email: email });
            setVerificationResult(userStatusCode[response.code as keyof typeof userStatusCode]);
        } catch (err) {
            console.error(err);
        }
        setLoadingResendCode(false);
        setCountdown(60);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await verifyUser({ email: email, verifyCode: Number(code) });
            setVerificationResult(userStatusCode[response.code as keyof typeof userStatusCode]);
            if (response.code === 1010) {
                setTimeout(() => {
                    navigation("/login");
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            setVerificationResult("Có lỗi xảy ra. Vui lòng thử lại.");
        }
        setLoading(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
        }, 1000);

        // Clear interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <>
            <Header />
            <Container gradient>
                <div className="h-screen sm:w-[500px]">
                    <div className="w-full max-w-[600px] bg-white p-5">
                        <h1 className="mb-[15px] text-[22px] font-bold text-textColor">Xác nhận đăng ký</h1>
                        <Line />

                        <form onSubmit={handleSubmit}>
                            <div className="w-full max-w-[600px] bg-white p-5">
                                <div className="mb-[15px] flex flex-col items-center justify-center gap-2">
                                    <label className="block text-[14px] font-semibold text-textColor" htmlFor="code">
                                        Mã xác nhận
                                    </label>
                                    <div className="flex gap-5">
                                        <Input.OTP length={4} {...sharedProps} className="h-4 w-4" />
                                    </div>
                                </div>
                                {verificationResult && (
                                    <Alert
                                        message={verificationResult}
                                        showIcon
                                        closable
                                        type={verificationResult.includes("thành công") ? "success" : "error"}
                                    />
                                )}
                                <ButtonComponent type="submit" loading={loading} className="mt-3 w-full rounded-md bg-blueLight px-2 py-2 text-white">
                                    Xác nhận
                                </ButtonComponent>
                            </div>
                        </form>
                        <div className="flex justify-center gap-2">
                            Không nhận được mã xác nhận?
                            {countdown > 0 ? (
                                <span className="text-blueLight">{countdown}s</span>
                            ) : (
                                <>
                                    <ButtonComponent onClick={handleResendCode} className="text-blueLight hover:text-secondary">
                                        Gửi lại mã
                                    </ButtonComponent>
                                    <Spin indicator={<SyncOutlined spin={loadingResendCode} />} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default VerifyCode;
