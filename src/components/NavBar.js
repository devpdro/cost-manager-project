import Logo from "../assets/costs_logo.png";

import styles from "./NavBar.module.css";

import Container from "./Container";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={Logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default NavBar;
