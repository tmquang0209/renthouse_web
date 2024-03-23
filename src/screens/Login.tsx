import React from "react";
import { Container, Header } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectMessage, selectToken } from "../redux/Reducer/AuthSlice";
import { useFormik } from "formik";
import { login } from "../redux/Actions";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ButtonComponent from "../components/Button";

const loginSchema = object().shape({
    username: string().required("Username is required").min(6, "Username must be at least 6 characters"),
    password: string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const Login = () => {
    const token = useAppSelector(selectToken);
    const message = useAppSelector(selectMessage);

    const dispatch = useAppDispatch();

    const handleSubmit = (values: any) => {
        dispatch(login(values));
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: loginSchema,
    });

    // React.useEffect(() => {
    //     if (token) {
    //         window.location.href = "/";
    //     }
    // }, [token]);

    return (
        <>
            <Header />
            <Container gradient>
                <div className="mx-auto flex w-fit flex-col items-center gap-[30px] bg-white p-[28px]">
                    <div className="">
                        <h1 className="mb-[15px] text-[22px] font-[500] font-bold text-textColor">Đăng nhập</h1>
                        <div className="h-[1px] w-full bg-lineColor"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col gap-[10px] border-r-[1px] p-5">
                                    <div>
                                        <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                            Tên đăng nhập
                                            <p className="text-2xl text-red-600">*</p>
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            onChange={formik.handleChange}
                                            value={formik.values.username}
                                            className="h-[40px] w-full rounded-[5px] border-[1px] border-lineColor px-[10px]"
                                        />
                                        {formik.errors.username && formik.touched.username && (
                                            <p className="text-[12px] text-red-500">{formik.errors.username}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="flex gap-[5px] text-[16px] font-[400] text-textColor">
                                            Mật khẩu
                                            <p className="text-2xl text-red-600">*</p>
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            className="h-[40px] w-full rounded-[5px] border-[1px] border-lineColor px-[10px]"
                                        />
                                        {formik.errors.password && formik.touched.password && (
                                            <p className="text-[12px] text-red-500">{formik.errors.password}</p>
                                        )}
                                    </div>
                                    <div className="flex flex-row items-center gap-[10px]">
                                        <input type="checkbox" className="h-[20px] w-[20px]" />
                                        <label className="text-[16px] font-[400] text-textColor">Ghi nhớ đăng nhập</label>
                                    </div>
                                    <ButtonComponent onClick={() => console.log("Clicked")}>Đăng nhập</ButtonComponent>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col items-center p-5 text-center">
                            <h1 className="pb-5 text-2xl font-bold">Hoặc đăng nhập bằng</h1>
                            <ButtonComponent className="flex w-full gap-5 rounded-lg border-[1px] border-gray-200 bg-white px-7 py-3 font-bold">
                                <img src="/img/gg.png" alt="" className="w-5" />
                                <p className="text-black">Đăng nhập bằng Google</p>
                            </ButtonComponent>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-[15px]">
                        <h1 className="text-[20px] font-[400] text-textColor ">Bạn chưa có tài khoản ?</h1>
                        <div className="h-[24px] w-[2px] bg-textColor"></div>
                        <Link className="text-[20px] font-[400] text-colorBtn " to="/register">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Login;
