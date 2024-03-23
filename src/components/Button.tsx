import React from "react";
import { BtnProps } from "../constants/interface";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const ButtonComponent = (props: BtnProps) => {
    const { children, onClick, className, style, disabled, loading, type } = props;

    return (
        <>
            <button
                type={type ? type : "button"}
                className={`${className} w-32 rounded-sm bg-colorBtn px-1 py-2 text-white`}
                onClick={onClick}
                style={style}
                disabled={disabled}
            >
                {loading && (
                    <Spin
                        style={{
                            paddingRight: 5,
                        }}
                        indicator={
                            <LoadingOutlined
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                }}
                                spin
                            />
                        }
                    />
                )}
                {children}
            </button>
        </>
    );
};

export default ButtonComponent;
