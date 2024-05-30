import Link from "next/link"

import { IButtonProps } from "./Button.type"
import style from './button.module.scss';
const {
    btn,
    line,
    btnDark
} = style;

const Button = ({ children, href, dark, button, btnType }: IButtonProps) => {
    if (button) {
        <button className={dark ? `${btn} ${btnDark}` : btn} type={btnType}>{children}</button>
    }
    return (
        <Link className={dark ? `${btn} ${btnDark}` : btn} href={href ? href : '#'}><span className={line}/>{children}</Link>
    );
};

export default Button;
