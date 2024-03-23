import React from "react";
import { ContainerProps } from "../constants/interface";



const Container = (props: ContainerProps) => {
    const { children, style, gradient } = props;

    return (
        <div className={`container ${gradient && "bg-gradient-to-r from-primary to-secondary"}`} style={style}>
            {children}
        </div>
    );
};

export default Container;
