import styles from "../styles/Footer.module.css";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.icons}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
