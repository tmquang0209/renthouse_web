import React from "react";

interface LineProps {
    color?: string;
}

const Line = ({ color }: LineProps) => {
    return <hr className={`border-1 border-${color || "lineColor"} w-full`} />;
};

export default Line;
