import Link from 'next/link';
import style from './policySection.module.scss';
const {
    policyContent,
    heading,
    contentContainer,
    list,
    returnPolicyContainer
} = style;

const PolicySection = () => {
    return(
        <section className={policyContent}>
            <h1 className={heading}>Policy</h1>
            <div className={contentContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur quis quaerat blanditiis amet nulla voluptatum inventore dignissimos error libero sed, vitae, magni, eaque similique nobis exercitationem maiores ipsam quidem?</p>
                <h3>lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dignissimos, fugit pariatur quia sequi non exercitationem quibusdam odit maxime molestias ut! Animi autem veritatis error vel voluptate asperiores deleniti odit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem debitis autem quidem numquam distinctio, temporibus similique earum molestias magni laudantium aspernatur qui. Aspernatur voluptate aliquid ullam ipsum consequatur dolor. Vero.</p>
                <h3>lorem ipsum dolor sit amet</h3>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className={list}>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eligendi, maiores quidem minus dicta ratione velit culpa, fuga consequuntur rem architecto nemo quae eius? Et, soluta libero. Vero, illum aperiam.</p>
                <h3>lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsam accusamus harum perspiciatis, asperiores pariatur alias temporibus delectus minus rem necessitatibus cumque dolore nobis omnis enim nihil itaque eius voluptates.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, consequuntur eum, ratione sapiente quam similique sequi quas accusamus odit voluptate harum dolore quo? Placeat deserunt exercitationem neque animi. Illo, accusantium!</p>
                <h3>lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex omnis repellat harum facere aliquam doloremque quas distinctio numquam velit! Quidem nihil atque labore maxime iste itaque, impedit voluptatum magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, ipsum reprehenderit, quibusdam aperiam ab assumenda velit illo consequatur veritatis unde id aut eveniet deserunt placeat corporis sequi similique ipsa.</p>
                
                <div className={returnPolicyContainer}>
                    <h3>lorem ipsum dolor sit amet</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, incidunt suscipit molestias rem doloremque recusandae tempore expedita, optio distinctio quisquam, aspernatur commodi! Nemo, molestias excepturi! Commodi dicta expedita blanditiis sequi.</li>
                    </ul>                    
                    <h3>lorem ipsum dolor sit amet</h3>
                    <ul>
                        <li>To be eligible for a return, your item must be unused, unworn, and in the same condition that you received it. It must also be in the original packaging with all tags attached.</li>
                    </ul>
                    <h3>lorem ipsum dolor sit amet</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, optio? Incidunt aperiam praesentium esse adipisci saepe, tempora iste reprehenderit aliquam voluptates doloremque necessitatibus ratione accusantium eaque odit, fuga expedita natus.</li>
                    </ul>
                    <h3>lorem ipsum dolor sit amet</h3>
                    <ul>
                        <li>lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim sapiente neque:
                            <ul>
                                <li>lorem ipsum dolor sit amet</li>
                                <li>lorem ipsum dolor sit amet</li>
                            </ul>
                        </li>
                        <li>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
            <p>Last Updated: [Date]</p>
        </section>
    );
};

export default PolicySection;

