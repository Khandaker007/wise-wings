import Image from 'next/image';

import style from './member.module.scss';
import { IMemberProps } from './Member.type';
const {
    member,
    contentContainer,
    memberName,
    memberDetails,
    imgContainer,
    img
} = style;

const Member = ({ name, details, imgPath }: IMemberProps) => {
    return(
        <div className={member}>
            <div className={contentContainer}>
                <h2 className={memberName}>{name}</h2>
                <p className={memberDetails}>{details}</p>
            </div>
            <div className={imgContainer}>
                <Image src={imgPath} className={img} alt="member image" width={1000} height={1000} priority/>
            </div>
        </div>
    );
};

export default Member;
