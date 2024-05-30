import Image from 'next/image';

import heroImg from '@/assets/images/pexels-fotoaibe-1571460.jpg';

import style from './HeroSection.module.scss';
const {
    heroSection,
    contentContainer,
    heading,
    text,
    imgContainer,
    img
} = style;

const HeroSection = () => {
    return (
        <section className={heroSection}>
            <div className={contentContainer}>
                <h1 className={heading}>Collaboration</h1>
                <p className={text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti officiis nam debitis cupiditate.</p>
            </div>
            <div className={imgContainer}>
                <Image src={heroImg} className={img} alt="hero image" width={1000} height={1000} priority/>
            </div>
        </section>
    );
};

export default HeroSection;
