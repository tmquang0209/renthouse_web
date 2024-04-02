import React from "react";

interface InputComponentProps {
    type?: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
    eyes?: boolean;
    hidden?: boolean;
    handleHidden?: (name: string) => void;
    placeholder?: string;
}

const InputComponent = (props: InputComponentProps) => {
    const { type, name, onChange, value, eyes, hidden, handleHidden, className, placeholder } = props;

    return (
        <div className="relative flex items-center">
            <input
                type={type ? type : "text"}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`h-[40px] w-full rounded-[5px] border-[1px] border-lineColor px-[10px] ${className || ""}`}
            />
            {eyes && (
                <i
                    onClick={() => handleHidden && handleHidden(name)}
                    className={`fa-regular fa-eye${hidden ? "" : "-slash"} absolute right-2 cursor-pointer text-[20px] text-textColor`}
                ></i>
            )}
        </div>
    );
};

export default InputComponent;
