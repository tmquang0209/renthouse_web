import React from "react";
import { ContainerProps } from "../constants/interface";

const Container = (props: ContainerProps) => {
    const { children, style, gradient, className } = props;

    return (
        <>
            <div className={`${gradient && "bg-gradient-to-br from-primary to-secondary"} overflow-auto py-10 h-auto`}>
                <div className={`container flex h-auto flex-col items-center justify-center gap-5 ${className}`} style={style}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Container;
