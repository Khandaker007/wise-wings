import { ContactForm } from '@/components/Form';
import style from './contactSection.module.scss';
const {
    contactSection,
    heading,
    contactContainer,
    contentContainer,
    addressInfo,
    address,
    email,
    phone,
    mapContainer,
    formContainer
} = style;

const ContactSection = () => {
    return (
        <section className={contactSection}>
            <h1 className={heading}>let&apos;s start the conversation</h1>
            <div className={contactContainer}>
                <div className={contentContainer}>
                    <h4 className={heading}>get in touch</h4>
                    <div className={addressInfo}>
                        <p className={address}>
                            <span>Address:</span>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </p>
                        <p className={email}>
                            <span>Email:</span>
                            <span>Info@lorem.org</span>
                        </p>
                        <p className={phone}>
                            <span>Phone:</span>
                            <span>123 456 789</span>
                        </p>
                    </div>
                </div>
                <div className={mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                    />
                </div>
                <div className={formContainer}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
