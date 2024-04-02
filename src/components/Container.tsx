import React from "react";
import { ContainerProps } from "../constants/interface";

const Container = (props: ContainerProps) => {
    const { children, style, gradient, className } = props;

    return (
        <>
            <div className={`${gradient && "bg-gradient-to-br from-primary to-secondary"} py-10`}>
                <div className={`container flex h-full items-center justify-center gap-5 flex-col ${className}`} style={style}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Container;
