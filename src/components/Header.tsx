import React from "react"
import { Link } from "react-router-dom";

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
    return (
        <header className="w-full h-[60px] shadow-md bg-white flex items-center sticky top-0 z-[9999]" >
            <nav className="wrapper w-full h-auto  flex flex-row justify-between items-center">
                <h1 className="text-[30px] text-black font-[600]  leading-[45px] tracking-[0.4px] cursor-pointer">LOGO</h1>
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
                    <ul className="flex flex-row gap-[15px] ">
                        <li className=" flex flex-row items-center gap-[10px] cursor-pointer">
                            <i className="fa-solid fa-right-from-bracket text-[20px] text-textColor "></i>
                            <Link to="/login" className="hover:text-primary text-[16px] text-textColor font-[400] ">
                                Đăng nhập
                            </Link>
                        </li> 
                        <li className="w-[2px] h-[25px] bg-textColor"> 
                        </li>
                        <li className=" flex flex-row items-center gap-[10px] cursor-pointer">
                            <i className="fa-regular fa-circle-user text-[20px] text-textColor "></i>
                            <Link to="/register" className="hover:text-primary text-[16px] text-textColor font-[400] ">
                                Đăng ký
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
