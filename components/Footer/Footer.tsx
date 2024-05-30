import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo/Wise_grey.jpg';
import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";


import style from './footer.module.scss';
const { 
    footer,
    contentContainer,
    logoContainer,
    img,
    socialMedia,
    list,
    item,
    link,
    copyrightContainer,
    copyright,
    icon
} = style;

const Footer = () => {
    return (
        <div className={footer}>
            <div className={contentContainer}>
                <div className={logoContainer}>
                    <Image className={img} src={logo} height={1000} width={1000} alt='graysa collection logo' priority/>
                </div>
                <div className={socialMedia}>
                    <Link className={link} href={'#'}><MdFacebook className={icon} /></Link>
                    <Link className={link} href={'#'}><FaYoutube className={icon} /></Link>
                    <Link className={link} href={'#'}><FaLinkedin className={icon} /></Link>
                    <Link className={link} href={'#'}><BiLogoInstagramAlt className={icon} /></Link>
                </div>
                <ul className={list}>
                    <li className={item}>
                        <Link className={link} href='/faq'>faq</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='privacy-policy'>policy</Link>
                    </li>
                    <li className={item}>
                        <Link className={link} href='/contact-us'>contact</Link>
                    </li>
                </ul>
            </div>
            <div className={copyrightContainer}>
                <p className={copyright}>COPYRIGHT ©2024 wise wings. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;
