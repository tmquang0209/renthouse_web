import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import ButtonComponent from "../components/Button";
import { signInUser } from "../API/user";
import { Data } from "../constants/interface";

const registerSchema=Yup.object().shape({
    fullName: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Trường này không phải Email"),
    password: Yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Mật khẩu tối thiểu 8 ký tự ,bao gồm chữ cái hoa và thường,gồm 1 ký tự đặc biệt (#@$%,..."),
    confirmPassword: Yup.string().required("Password confirmation is required").oneOf([Yup.ref('password')], 'Nhắc lại mật khẩu không đúng')
});
const Register: React.FC = () => {
    const navigate=useNavigate()
    const [messageBoolean,setMessageBoolean]=useState<boolean>(false)
    const [message,setMessage]=useState<String>("Đăng ký thành công")
    const [success,setSuccess]=useState<boolean>(true)
    //state ẩn hiện
    const [requireFullName, setRequireFullName] = useState<boolean>(true);
    const [requireEmail, setRequireEmail] = useState<boolean>(true);
    const [requirePassword, setRequirePassword] = useState<boolean>(true);
    const [requireConfirmPassword, setRequireConfirmPassword] = useState<boolean>(true);
    //state con mắt
    const [hiddenPassword,setHiddenPassword]=useState<boolean>(true)
    const [hiddenConfirmPassword,setHiddenConfirmPassword]=useState<boolean>(true)
    //
    const passwordRef=useRef<HTMLInputElement>(null)
    const cofirmPassword=useRef<HTMLInputElement>(null)
    const handleSubmit=async (values:Data)=>{
        try {
            await signInUser(values)
            setMessageBoolean(true)
            setMessage("Đăng ký thành công ")
            setSuccess(true)
            setTimeout(()=>{
                setMessageBoolean(false)
                navigate("/login")
            },2000)
        }
        catch (err:any) {
            setMessageBoolean(true)
            setMessage("Đăng ký thất bại! ")
            setSuccess(false)
            setTimeout(()=>{
            setMessageBoolean(false)
            },10000)
            throw new Error(`Lỗi! : ${err}`)
        }
    }
    const formik=useFormik({
        initialValues :{
            fullName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        onSubmit: handleSubmit,
        validationSchema:registerSchema
    })
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
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="email">
                                            Email
                                        </label>
                                        {requireEmail && <div className="">
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
                                        </div>}
                                    </div>
                                    <input
                                        id="email"
                                        className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                        type="email"
                                        placeholder="Vui lòng nhập mật khẩu..."
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onFocus={()=>{return setRequireEmail(false)}}
                                    />
                                    {formik.errors.email && (<p className="text-[12px] mt-[-6px] text-red-500">{formik.errors.email}</p>)}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="fullName">
                                            Họ và tên
                                        </label>
                                        {requireFullName && <div className="">
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
                                        </div>}
                                    </div>
                                    <input
                                        id="fullName"
                                        className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                        type="text"
                                        placeholder="Vui lòng nhập tài khoản..."
                                        name="fullName"
                                        value={formik.values.fullName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        onFocus={()=>{return setRequireFullName(false)}}
                                    />
                                    {formik.errors.fullName && (
                                        <p className="text-[12px] mt-[-6px] text-red-500">{formik.errors.fullName}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="password">
                                            Mật khẩu
                                        </label>
                                        {requirePassword && <div className="">
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
                                        </div>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                            type={hiddenPassword===true?'password':'text'}
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onFocus={()=>{return setRequirePassword(false)}}
                                            ref={passwordRef}
                                        />
                                        <i 
                                            onClick={()=>{
                                                setHiddenPassword((pre)=>!pre)
                                                if (passwordRef.current) {
                                                    const input = passwordRef.current;
                                                    input.focus();
                                                }
                                            }}
                                            className={`fa-regular fa-eye${hiddenPassword===true?'':'-slash'} absolute right-[20px] top-[16px] cursor-pointer text-[20px] text-textColor`}>
                                        </i>
                                    </div>
                                    {formik.errors.password && (<p className="text-[12px] mt-[-6px] text-red-500">{formik.errors.password}</p>)}
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <div className="flex flex-row items-center gap-[6px] ">
                                        <label className="text-[16px] text-textColor" htmlFor="confirmPassword">
                                            Nhắc lại mật khẩu
                                        </label>
                                        {requireConfirmPassword && <div className="">
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
                                        </div>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            className="w-[520px] rounded-[4px] border-[0.2px] border-lineColor px-[20px]  py-[12px] text-gray-700 placeholder:text-[16px] focus:border-blue-500 focus:outline-none focus:ring"
                                            type={hiddenConfirmPassword===true?'password':'text'}
                                            placeholder="Vui lòng nhập mật khẩu..."
                                            name="confirmPassword"
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            onFocus={()=>{return setRequireConfirmPassword(false)}}
                                        />
                                        <i 
                                            onClick={()=>{
                                                setHiddenConfirmPassword((pre)=>!pre)
                                                if (cofirmPassword.current) {
                                                    const input = cofirmPassword.current;
                                                    input.focus();
                                                }
                                            }}
                                            className={`fa-regular fa-eye${hiddenConfirmPassword===true?'':'-slash'} absolute right-[20px] top-[16px] cursor-pointer text-[20px] text-textColor`}>
                                        </i>
                                    </div>
                                    {formik.errors.confirmPassword && (<p className="text-[12px] mt-[-6px] text-red-500">{formik.errors.confirmPassword}</p>)}
                                </div>
                                {messageBoolean && (
                                    <div>
                                        <div className={`${success===true?"bg-[#97F7AC] border-[#0E8127] ":"bg-[#FFCDCF] border-[#F04248]"}  py-[8px] px-[15px] my-[-15px] rounded-[4px] border  text-[16px]`}>
                                            <p className={`text-[16px] ${success===true?"text-[#0E8127]":"text-[#F04248]"} `}>{message}</p>
                                        </div>
                                    </div>
                                )}
                                <ButtonComponent 
                                    // loading
                                    type="submit"
                                >Đăng ký
                                </ButtonComponent>
                            </form>

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
