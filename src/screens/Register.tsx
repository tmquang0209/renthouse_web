import React from 'react'
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import Button from '../components/Button';


const Register:React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="py-[50px] wrapper bg-gradient-to-r from-blue-200 via-purple-200 to-gray-200 flex flex-col gap-[35px] items-center">
                <div className="p-[28px] bg-white flex flex-col gap-[30px] mx-auto">
                    <div className="">
                        <h1 className="text-[22px] text-textColor font-[500] mb-[15px]">Đăng ký</h1>
                        <div className="w-full bg-lineColor h-[1px]"></div>
                    </div>
                    <div className="flex flex-row gap-[30px]">
                        <div className="">
                            <form 
                                className="flex flex-col gap-[30px]"
                                // onSubmit={formik.handleSubmit}
                            >
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="username">Họ và tên</label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="-0.5" x2="6.82787" y2="-0.5" transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)" stroke="#CA0202"/>
                                                <line y1="-0.5" x2="7.27718" y2="-0.5" transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)" stroke="#CA0202"/>
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202"/>
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        id="username"
                                        className="w-[520px] px-[20px] py-[12px] border-[0.2px] border-lineColor  rounded-[4px] text-gray-700 focus:outline-none focus:ring focus:border-blue-500 placeholder:text-[16px]"
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
                                        <label className="text-[16px] text-textColor" htmlFor="email">Email</label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="-0.5" x2="6.82787" y2="-0.5" transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)" stroke="#CA0202"/>
                                                <line y1="-0.5" x2="7.27718" y2="-0.5" transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)" stroke="#CA0202"/>
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202"/>
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        id="email"
                                        className="w-[520px] px-[20px] py-[12px] border-[0.2px] border-lineColor  rounded-[4px] text-gray-700 focus:outline-none focus:ring focus:border-blue-500 placeholder:text-[16px]"
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
                                        <label className="text-[16px] text-textColor" htmlFor="password">Mật khẩu</label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="-0.5" x2="6.82787" y2="-0.5" transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)" stroke="#CA0202"/>
                                                <line y1="-0.5" x2="7.27718" y2="-0.5" transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)" stroke="#CA0202"/>
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202"/>
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="w-[520px] px-[20px] py-[12px] border-[0.2px] border-lineColor  rounded-[4px] text-gray-700 focus:outline-none focus:ring focus:border-blue-500 placeholder:text-[16px]"
                                            type="password"
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="password"
                                            // value={formik.values.password}
                                            // onChange={formik.handleChange} 
                                        />
                                        <i className="fa-regular fa-eye absolute cursor-pointer text-textColor text-[20px] top-[16px] right-[20px]"></i>
                                        {/* <i class="fa-regular fa-eye-slash"></i> */}
                                    </div>
                                    {/* {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>} */}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="confirmPassword">Nhắc lại mật khẩu</label>
                                        <div className="">
                                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="-0.5" x2="6.82787" y2="-0.5" transform="matrix(0.745607 0.666386 -0.650573 0.759444 0.637451 1.71728)" stroke="#CA0202"/>
                                                <line y1="-0.5" x2="7.27718" y2="-0.5" transform="matrix(-0.699572 0.714562 -0.699572 -0.714562 5.72827 1.06728)" stroke="#CA0202"/>
                                                <path d="M3.50098 0.742279L3.50098 7.24228" stroke="#CA0202"/>
                                                <path d="M7.00098 3.66728L0.000976682 3.66728" stroke="#CA0202"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="w-[520px] px-[20px] py-[12px] border-[0.2px] border-lineColor  rounded-[4px] text-gray-700 focus:outline-none focus:ring focus:border-blue-500 placeholder:text-[16px]"
                                            type="password"
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="password"
                                            // value={formik.values.password}
                                            // onChange={formik.handleChange} 
                                        />
                                        <i className="fa-regular fa-eye absolute cursor-pointer text-textColor text-[20px] top-[16px] right-[20px]"></i>
                                        {/* <i class="fa-regular fa-eye-slash"></i> */}
                                    </div>
                                    {/* {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>} */}
                                </div>
                                <Button
                                    Style={"bg-colorBtn w-[130px]"}
                                    children="Đăng ký"
                                />
                            </form>
                            {/* {message && (
                                <div>
                                    <p>{message}</p>
                                </div>
                            )} */}
                        </div>
                        <div className="w-[1px] bg-lineColor h-auto">
                        </div>
                        <div className="flex flex-col gap-[40px] ">
                            <h1 className="text-[22px] text-textColor font-[500] text-center leading-[33px]">Hoặc đăng nhâp</h1>
                            <div className="flex flex-col gap-[20px]">
                                <div className="w-[324px] py-[12px] px-[12px] flex flex-row items-center justify-between rounded-[4px] border border-[#666666] bg-white filter drop-shadow-md">
                                    <img 
                                        className="w-[30px] h-[30px]" 
                                        src="../../public/img/gg.png" 
                                        alt="" />
                                    <h1 className="mr-[50px] text-[16px] font-[600] text-textColor">Đăng nhập bằng google</h1>
                                </div>
                                <Link to="/login" className="w-[324px] py-[14px] rounded-[4px] font-[600] text-white bg-colorBtn border-[1.5px]  border-[#4B7BE5] text-center filter drop-shadow-md">
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-center ">
                        <h3 className="text-textColor ">Bằng việc tiếp tục, bạn đồng ý với Điều khoản sử dụng, Chính sách bảo mật, Quy chế, </h3>
                        <Link className=" text-warningColor" to="">Chính sách của chúng tôi</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-[15px] items-center">
                    <h1 className="text-[20px] font-[400] text-textColor " >Bạn đã có tài khoản ?</h1>
                    <div className="w-[2px] h-[24px] bg-textColor"></div>
                    <Link  className="text-[20px] font-[400] text-colorBtn " to="/register">Đăng Nhập</Link>
                </div>
            </div>
        </div>
    )
}
export default Register