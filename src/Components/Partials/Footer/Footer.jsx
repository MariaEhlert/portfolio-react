import styles from './Footer.module.scss';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <h4>Kontakt mig på</h4>
            <article>
            <a href="mailto: mariaehlert95@gmail.com" target="_blank"> Email <AiOutlineMail /></a>
            <a href="https://www.linkedin.com/in/maria-gottlieb-ehlert-ba6474220/" target="_blank">LinkedIn profil <AiFillLinkedin /></a>
            </article>
        </footer>
    )
}