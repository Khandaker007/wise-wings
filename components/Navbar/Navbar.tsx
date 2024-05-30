'use client'

import { useState } from 'react';
import Image from 'next/image';

import logo from '@/assets/logo/Wise_grey.jpg';
import { GiHamburgerMenu } from "react-icons/gi";

import style from './navbar.module.scss';
import NavLink from './NavLink/NavLink';
const {
    navbar,
    logoContainer,
    navContainer,
    navList,
    navBtn,
    icon,
    navContainerActive,
    navbarActive,
    img
} = style;

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleNavbar = () => {
        setActive(!active);
        console.log(active);
    }

    const handleMobileNavbar = () => {
        setActive(false);
    }

    return (
        <header className={active ? `${navbar} ${navbarActive}` : navbar}>
            <div className={logoContainer}>
                <Image src={logo} className={img} alt='logo' width={1000} height={1000} priority/>
            </div>
            <nav className={ active ? `${navContainer} ${navContainerActive}` : navContainer}>
                <ul className={navList}>
                    <NavLink href='/' onClick={handleMobileNavbar}>home</NavLink>
                    <NavLink href='/about-us' onClick={handleMobileNavbar}>about us</NavLink>
                    <NavLink href='/services' onClick={handleMobileNavbar}>services</NavLink>
                    <NavLink href='/collaboration' onClick={handleMobileNavbar}>collaboration</NavLink>
                    <NavLink href='/contact-us' onClick={handleMobileNavbar}>contact us</NavLink>
                </ul>
            </nav>
            <div className={navBtn}>
                <GiHamburgerMenu className={icon} onClick={handleNavbar}/>
            </div>
        </header>
    );
};

export default Navbar;
