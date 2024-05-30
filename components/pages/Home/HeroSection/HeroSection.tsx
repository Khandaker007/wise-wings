import { Button } from '@/components/Button';
import style from './heroSection.module.scss';
const {
    heroSection,
    video,
    contentContainer,
    btnContainer,
    heading
} = style;

const HeroSection = () => {
    return(
        <section className={heroSection}>
            <div className={contentContainer}>
                <h1 className={heading}>
                    <span>let&apos;s find your</span>
                    <span>dream home</span>
                </h1>
                <div className={btnContainer}>
                    <Button href='/contact-us'>contact us</Button>
                </div>
            </div>
            <video className={video} autoPlay loop playsInline muted width='100%' height='100%' preload="none">
                <source  src="https://aupg.syd1.digitaloceanspaces.com/aupg-feb.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default HeroSection;
