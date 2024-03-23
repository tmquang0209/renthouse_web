export interface ContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    gradient?: boolean;
}

export interface BtnProps {
    Style: string;
    children: string
}

export interface router {
    path: string;
    element: any
}