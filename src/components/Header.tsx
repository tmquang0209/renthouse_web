import React from "react";
import Container from "./Container";

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
        <>
            <Container>
                <header className="p-5">
                    <nav className="flex flex-row justify-between">
                        <h1 className="text-xl font-bold">LOGO</h1>
                        <div>
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
                        </div>
                        <div>
                            <ul className="flex flex-row gap-5">
                                <li>
                                    <a href="/login" className="hover:text-primary">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a href="/register" className="hover:text-primary">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Container>
        </>
    );
};

export default Header;
