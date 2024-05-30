import { MouseEventHandler } from "react";

export interface IButtonProps {
    children: string;
    href?: string;
    dark?: boolean,
    button?: boolean,
    btnType?: "button" | "submit" | "reset",
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
