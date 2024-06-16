export interface ContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    gradient?: boolean;
    className?: string;
}

export interface BtnProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    loading?: boolean;
}

export interface router {
    path: string;
    element: any;
}

export interface tokenProps {
    data: any;
    time?: string;
}
export interface SignUpProps {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthProps {
    user: any;
    token: string;
    message?: string;
    code?: number;
    success?: boolean;
}
