import React from "react";
import { ContainerProps } from "../constants/interface";

const Container = (props: ContainerProps) => {
    const { children, style, gradient, className } = props;

    return (
        <>
            <div className={`${gradient && "bg-gradient-to-br from-primary to-secondary"} h-screen w-screen py-10`}>
                <div className={`container h-full ${className}`} style={style}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Container;
