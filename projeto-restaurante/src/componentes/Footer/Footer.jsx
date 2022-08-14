import styles from "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="item1">
                <p>Av. Rio Branco, 1000, centro, Florianopolis/SC</p>
                <p> Contato: (48)99999-0000 - Whatts</p>
                <p>Atendimento: ter à dom das 18h às 23h</p>
            </div>

            <div className="item2">
                <span style={{ paddingRight: 5 }}>Copyright </span>
                <FontAwesomeIcon icon={faCopyright} />{" "}
                <span style={{ paddingLeft: 5 }}>
                    {new Date().getFullYear()} Devin. Todods os direitos reservados.
                </span>
            </div>
            <a
                href="https://github.com/karla-vida"
                target="_blank"
                className="item3"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="https://www.facebook.com/karla.ciesielskivida"
                target="_blank"
                className="item4"
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
                href="https://www.youtube.com/c/ACATESC"
                target="_blank"
                className="item5"
            >
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
    </footer>
);
};

export default Footer;