import Image from 'next/image';

import imageOne from '@/assets/images/collaboration-one.jpg'
import imageTwo from '@/assets/images/collaboration-two.jpg'

import style from './collaborateSection.module.scss';
const {
    collaborateSection,
    contentContainer,
    imagesContainer,
    imgContainer,
    heading,
    description,
    img
} = style;

const CollaborateSection = () => {
    return (
        <section className={collaborateSection}>
            <div className={contentContainer}>
                <h2 className={heading}>Lorem ipsum dolor sit</h2>
                <p className={description}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut in, explicabo itaque, ipsa possimus temporibus suscipit adipisci sed nesciunt non sunt optio omnis repellat corrupti earum et! Assumenda, eius..</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut in, explicabo itaque, ipsa possimus temporibus suscipit adipisci sed nesciunt non sunt optio omnis repellat corrupti earum et! Assumenda, eius..</span>
                </p>
            </div>
            <div className={imagesContainer}>
                <div className={imgContainer}>
                    <Image className={img} src={imageOne} alt='collaboration img' height={1000} width={1000} priority/>
                </div>
                <div className={imgContainer}>
                    <Image className={img} src={imageTwo} alt='collaboration img' height={1000} width={1000} priority/>
                </div>
            </div>
        </section>
    );
};

export default CollaborateSection;
