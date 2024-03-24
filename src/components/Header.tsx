import React from "react";
import { Link } from "react-router-dom";

import { logout, selectUser } from "../redux/Reducer/AuthSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const menu = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact",
        link: "/contact",
    },
];

const Header = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    return (
        <header className="sticky top-0 z-[9999] flex h-[60px] w-full items-center bg-white px-10 shadow-md">
            <nav className="wrapper flex h-auto  w-full flex-row items-center justify-between">
                <h1 className="cursor-pointer text-[30px] font-[600]  leading-[45px] tracking-[0.4px] text-black">LOGO</h1>
                {/* <div>
                    <ul className="flex flex-row gap-10">
                        {menu.map((item, key) => (
                            <>
                                <li key={key}>
                                    <a href={item.link} className="hover:text-primary">
                                        {item.title}
                                    </a>
                                </li>
                            </>
                        ))}
                    </ul>
                </div> */}
                <div>
                    {user ? (
                        <>
                            <ul className="flex gap-5">
                                <li>Hi, {user.full_name}</li>
                                <li>
                                    <button onClick={() => dispatch(logout())}>Logout</button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className="flex flex-row gap-[15px] ">
                                <li className=" flex cursor-pointer flex-row items-center gap-[10px]">
                                    <i className="fa-solid fa-right-from-bracket text-[20px] text-textColor "></i>
                                    <Link to="/login" className="text-[16px] font-[400] text-textColor hover:text-primary ">
                                        Đăng nhập
                                    </Link>
                                </li>
                                <li className="h-[25px] w-[2px] bg-textColor"></li>
                                <li className=" flex cursor-pointer flex-row items-center gap-[10px]">
                                    <i className="fa-regular fa-circle-user text-[20px] text-textColor "></i>
                                    <Link to="/register" className="text-[16px] font-[400] text-textColor hover:text-primary ">
                                        Đăng ký
                                    </Link>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
