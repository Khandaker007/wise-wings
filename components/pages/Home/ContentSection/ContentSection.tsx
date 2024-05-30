import Image from 'next/image';

import imgWhyOne from '@/assets/images/why-us-one.jpg';
import imgWhyTwo from '@/assets/images/why-us-two.jpg';
import collaborationOne from '@/assets/images/collaboration-one.jpg';
import collaborationTwo from '@/assets/images/collaboration-two.jpg';

import { Button } from '@/components/Button';

import { IContentSectionProps } from './ContentSection.type';
import style from './contentSection.module.scss';
const {
    contentSection,
    contentContainer,
    images,
    imgContainerOne,
    imgContainerTwo,
    heading,
    details,
    reverseContent,
    reverseContentSection,
    btnContainer,
    img
} = style;

const ContentSection = ({ reverse, headingText, detailsText }: IContentSectionProps) => {
    if(reverse){
        return(
            <section className={`${contentSection} ${reverseContentSection}`}>
                <div className={images}>
                    <div className={imgContainerOne}>
                        <Image src={collaborationOne} className={img} alt='collaboration img' height={1000} width={1000} priority/>
                    </div>
                    <div className={imgContainerTwo}>
                        <Image src={collaborationTwo} className={img} alt='collaboration img' height={1000} width={1000} priority/>
                    </div>
                </div>
                <div className={`${contentContainer} ${reverseContent}`}>
                    <h2 className={heading}>{headingText}</h2>
                    <p className={details}>{detailsText}</p>
                    <div className={btnContainer}>
                        <Button href='#'>learn more</Button>
                    </div>
                </div>
            </section>
        );
    }
    return(
        <section className={contentSection}>
            <div className={contentContainer}>
                <h2 className={heading}>{headingText}</h2>
                <p className={details}>{detailsText}</p>    
                <div className={btnContainer}>
                    <Button href='#' dark>learn more</Button>
                </div>
            </div>
            <div className={images}>
                <div className={imgContainerOne}>
                    <Image src={imgWhyTwo} className={img} alt='collaboration img' height={1000} width={1000} priority/>
                </div>
                <div className={imgContainerTwo}>
                    <Image src={imgWhyOne} className={img} alt='collaboration img' height={1000} width={1000} priority/>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
