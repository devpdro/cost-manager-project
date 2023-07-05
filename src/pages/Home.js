import styles from "../styles/Home.module.css";
import Savings from "../assets/savings.svg";

import LinkButton from "../components/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <img src={Savings} alt="Savings" />
    </section>
  );
}

export default Home;
