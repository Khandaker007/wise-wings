import { MouseEventHandler } from "react";

export interface INavLinkProps {
    children: string,
    href: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}
