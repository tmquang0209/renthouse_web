import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import ButtonComponent from "../components/Button";

const Register: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="wrapper flex flex-col items-center gap-[35px] bg-gradient-to-r from-blue-200 via-purple-200 to-gray-200 py-[50px]">
                <div className="mx-auto flex flex-col gap-[30px] bg-white p-[28px]">
                    <div className="">
                        <h1 className="mb-[15px] text-[22px] font-[500] text-textColor">Đăng ký</h1>
                        <div className="h-[1px] w-full bg-lineColor"></div>
                    </div>
                    <div className="flex flex-row gap-[30px]">
                        <div className="">
                            <form
                                className="flex flex-col gap-[30px]"
                                // onSubmit={formik.handleSubmit}
                            >
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="username">
                                            Họ và tên
                                        </label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line
                                                    y1="-0.5"
                                                    x2="6.82787"
                                                    y2="-0.5"
                                                    transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)"
                                                    stroke="#CA0202"
                                                />
                                                <line
                                                    y1="-0.5"
                                                    x2="7.27718"
                                                    y2="-0.5"
                                                    transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)"
                                                    stroke="#CA0202"
                                                />
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202" />
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        id="username"
                                        className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                        type="text"
                                        placeholder="Vui lòng nhập tài khoản..."
                                        name="username"
                                        // value={formik.values.username}
                                        // onChange={formik.handleChange}
                                    />
                                    {/* {formik.errors.username && formik.touched.username && <p>{formik.errors.username}</p>} */}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="email">
                                            Email
                                        </label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line
                                                    y1="-0.5"
                                                    x2="6.82787"
                                                    y2="-0.5"
                                                    transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)"
                                                    stroke="#CA0202"
                                                />
                                                <line
                                                    y1="-0.5"
                                                    x2="7.27718"
                                                    y2="-0.5"
                                                    transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)"
                                                    stroke="#CA0202"
                                                />
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202" />
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202" />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        id="email"
                                        className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                        type="email"
                                        placeholder="Vui lòng nhập mật khẩu..."
                                        name="email"
                                        // value={formik.values.password}
                                        // onChange={formik.handleChange}
                                    />
                                    {/* {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>} */}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="password">
                                            Mật khẩu
                                        </label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line
                                                    y1="-0.5"
                                                    x2="6.82787"
                                                    y2="-0.5"
                                                    transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)"
                                                    stroke="#CA0202"
                                                />
                                                <line
                                                    y1="-0.5"
                                                    x2="7.27718"
                                                    y2="-0.5"
                                                    transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)"
                                                    stroke="#CA0202"
                                                />
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202" />
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                            type="password"
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="password"
                                            // value={formik.values.password}
                                            // onChange={formik.handleChange}
                                        />
                                        <i className="fa-regular fa-eye absolute right-[20px] top-[16px] cursor-pointer text-[20px] text-textColor"></i>
                                        {/* <i class="fa-regular fa-eye-slash"></i> */}
                                    </div>
                                    {/* {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>} */}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="confirmPassword">
                                            Nhắc lại mật khẩu
                                        </label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line
                                                    y1="-0.5"
                                                    x2="6.82787"
                                                    y2="-0.5"
                                                    transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)"
                                                    stroke="#CA0202"
                                                />
                                                <line
                                                    y1="-0.5"
                                                    x2="7.27718"
                                                    y2="-0.5"
                                                    transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)"
                                                    stroke="#CA0202"
                                                />
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202" />
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                            type="password"
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="password"
                                            // value={formik.values.password}
                                            // onChange={formik.handleChange}
                                        />
                                        <i className="fa-regular fa-eye absolute right-[20px] top-[16px] cursor-pointer text-[20px] text-textColor"></i>
                                        {/* <i class="fa-regular fa-eye-slash"></i> */}
                                    </div>
                                    {/* {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>} */}
                                </div>
                                <ButtonComponent loading>Đăng ký</ButtonComponent>
                            </form>
                            {/* {message && (
                                <div>
                                    <p>{message}</p>
                                </div>
                            )} */}
                        </div>
                        <div className="h-auto w-[1px] bg-lineColor"></div>
                        <div className="flex flex-col gap-[40px] ">
                            <h1 className="text-center text-[22px] font-[500] leading-[33px] text-textColor">Hoặc đăng nhâp</h1>
                            <div className="flex flex-col gap-[20px]">
                                <div className="flex w-[324px] flex-row items-center justify-between rounded-[4px] border border-[#666666] bg-white px-[12px] py-[12px] drop-shadow-md filter">
                                    <img className="h-[30px] w-[30px]" src="../../public/img/gg.png" alt="" />
                                    <h1 className="mr-[50px] text-[16px] font-[600] text-textColor">Đăng nhập bằng google</h1>
                                </div>
                                <Link
                                    to="/login"
                                    className="w-[324px] rounded-[4px] border-[1.5px] border-[#4B7BE5] bg-colorBtn py-[14px] text-center  font-[600] text-white drop-shadow-md filter"
                                >
                                    Đăng nhập
                                </Link>
                            </div>
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
                    <Link className="text-[20px] font-[400] text-colorBtn " to="/register">
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Register;
