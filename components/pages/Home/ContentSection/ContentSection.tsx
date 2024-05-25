import style from './contentSection.module.scss';
const {
    contentSection
} = style;

const ContentSection = () => {
    return(
        <section className={contentSection}>
            <h1>Content Section</h1>
        </section>
    );
};

export default ContentSection;
