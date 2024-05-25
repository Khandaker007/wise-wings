import style from './heroSection.module.scss';
const {
    heroSection
} = style;

const HeroSection = () => {
    return(
        <section className={heroSection}>
            <h1>Hero Section</h1>
        </section>
    );
};

export default HeroSection;
