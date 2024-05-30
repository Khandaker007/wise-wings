'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavLinkProps } from './NavLink.type';

import style from './navLink.module.scss';
const {
    navItem,
    navLink,
    active
} = style;

const NavLink = ({ href, onClick, children }: INavLinkProps) => {
    const path = usePathname();
    const isCurrentPath = path === href || (href !== '/' && path.startsWith(href));

    console.log('isCurrentPath: ', isCurrentPath);
    console.log('href: ', href);
    console.log('path: ', path);

    return (
        <li className={navItem}>
            <Link className={isCurrentPath ? `${navLink} ${active}` : navLink} href={href} onClick={onClick}>{children}</Link>
        </li>
    );
};

export default NavLink;
