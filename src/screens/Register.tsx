import React, { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpProps } from "../constants/interface";
import { ButtonComponent, Container, InputComponent, Line } from "../components";
import { object, string, ref } from "yup";
import { signupUser } from "../API/user";
import { Alert } from "antd";
import { userStatusCode } from "../constants/statusCode";

interface hiddenProps {
    password: boolean;
    confirmPassword: boolean;
    [key: string]: boolean; // Add index signature
}

// password has at least 8 characters, include at least 1 number and 1 letter
const registerSchema = object().shape({
    fullName: string().required("Vui lòng nhập họ tên"),
    email: string().required("Vui lòng nhập email").email("Trường này không phải Email"),
    password: string()
        .required("Vui lòng nhập mật khẩu")
        .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
        .matches(/^(?=.*\d)(?=.*[a-z]).{8,}$/, "Mật khẩu phải có ít nhất 1 chữ cái và 1 số"),
    confirmPassword: string()
        .required("Vui lòng nhập lại xác nhận mật khẩu")
        .oneOf([ref("password")], "Nhắc lại mật khẩu không đúng"),
});

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [messageResponse, setMessageResponse] = useState<string>();

    //eyes states
    const [hiddenInput, setHiddenInput] = useState<hiddenProps>({
        password: true,
        confirmPassword: true,
    });

    const handleHidden = (key: string) => {
        setHiddenInput((pre) => ({ ...pre, [key]: !pre[key] }));
    };

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            const response = await signupUser(values);
            const message = userStatusCode[response.code as keyof typeof userStatusCode];

            setMessageResponse(message);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: handleSubmit,
        validationSchema: registerSchema,
    });

    return (
        <>
            <Header />
            <Container gradient className="items-center justify-center">
                <div className="mx-auto flex w-fit flex-col items-center gap-[30px] bg-white p-[28px]">
                    <div className="w-full">
                        <h1 className="mb-[15px] text-[22px] font-[500] font-bold text-textColor">Đăng ký</h1>
                        <Line />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-col gap-[10px] p-5 sm:border-r-[1px]">
                                <>
                                    <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                        Email
                                        <p className="text-2xl text-red-600">*</p>
                                    </label>
                                    <InputComponent
                                        name="email"
                                        type="email"
                                        placeholder="Nhập email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && formik.touched.email && <p className="text-[12px] text-red-500">{formik.errors.email}</p>}
                                </>
                                <>
                                    <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                        Họ tên
                                        <p className="text-2xl text-red-600">*</p>
                                    </label>
                                    <InputComponent
                                        name="fullName"
                                        placeholder="Nhập họ tên"
                                        onChange={formik.handleChange}
                                        value={formik.values.fullName}
                                    />
                                    {formik.errors.fullName && formik.touched.fullName && (
                                        <p className="text-[12px] text-red-500">{formik.errors.fullName}</p>
                                    )}
                                </>
                                <>
                                    <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                        Mật khẩu
                                        <p className="text-2xl text-red-600">*</p>
                                    </label>
                                    <InputComponent
                                        name="password"
                                        type={hiddenInput.password ? "password" : "text"}
                                        placeholder="Nhập mật khẩu"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        eyes
                                        handleHidden={() => handleHidden("password")}
                                        hidden={hiddenInput.password}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <p className="text-[12px] text-red-500">{formik.errors.password}</p>
                                    )}
                                </>
                                <>
                                    <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                        Nhập lại mật khẩu
                                        <p className="text-2xl text-red-600">*</p>
                                    </label>
                                    <InputComponent
                                        name="confirmPassword"
                                        type={hiddenInput.confirmPassword ? "password" : "text"}
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                        eyes
                                        handleHidden={() => handleHidden("confirmPassword")}
                                        hidden={hiddenInput.confirmPassword}
                                    />
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                                        <p className="text-[12px] text-red-500">{formik.errors.confirmPassword}</p>
                                    )}
                                </>
                                {messageResponse && (
                                    <Alert
                                        message={messageResponse}
                                        type={messageResponse.includes("thành công") ? "success" : "error"}
                                        showIcon
                                        closable
                                        className={`font-bold ${messageResponse.includes("thành công") ? "text-green-500" : "text-red-500"}`}
                                    />
                                )}

                                <ButtonComponent loading={loading} type="submit">
                                    Đăng ký
                                </ButtonComponent>
                            </div>
                        </form>

                        <div className="flex flex-col items-center p-5 text-center">
                            <h1 className="pb-5 text-2xl font-bold">Hoặc đăng nhập bằng</h1>
                            <ButtonComponent className="flex w-full items-center justify-center gap-5 rounded-lg border-[1px] border-gray-200 bg-white px-7 py-3 font-bold">
                                <img src="/img/gg.png" alt="" className="w-5" />
                                <p className="text-black">Đăng nhập bằng Google</p>
                            </ButtonComponent>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <h3 className="text-textColor ">Bằng việc tiếp tục, bạn đồng ý với Điều khoản sử dụng, Chính sách bảo mật, Quy chế, </h3>
                        <Link className=" text-warningColor" to="">
                            Chính sách của chúng tôi
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-[15px]">
                    <h1 className="text-[20px] font-[400] text-textColor ">Bạn đã có tài khoản ?</h1>
                    <div className="h-[24px] w-[2px] bg-textColor"></div>
                    <Link className="text- text-[20px] font-[400] " to="/register">
                        Đăng Nhập
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Register;
