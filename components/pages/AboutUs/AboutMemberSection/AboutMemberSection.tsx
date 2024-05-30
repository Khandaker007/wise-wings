import Member from './Member/Member';

import memberOne from '@/assets/images/member-image-one.jpg';
import memberTwo from '@/assets/images/member-image-two.jpg';

import style from './aboutMemberSection.module.scss';
const {
    aboutMemberSection
} = style;

const AboutMemberSection = () => {
    console.log('memberOne: ', memberOne);
    return(
        <section className={aboutMemberSection}>
            <Member name='jesson rahman' details='lorem ipsum dolor sit amet consectetur adipisicing elit proident deleniti officiis nam debitis cupiditate consectetur adipisicing elit proident deleniti officiis nam debitis cupiditate' imgPath={memberOne.src}/>
            <Member name='Zia Islam' details='lorem ipsum dolor sit amet consectetur adipisicing elit proident deleniti officiis nam debitis cupiditat consectetur adipisicing elit proident deleniti officiis nam debitis cupiditate' imgPath={memberTwo.src}/>
        </section>
    );
};

export default AboutMemberSection;
