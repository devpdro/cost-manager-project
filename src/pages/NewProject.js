import styles from "../styles/NewProject.module.css";

import ProjectForm from "../components/ProjectForm";
function NewProject() {
  return (
    <section className={styles.container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto" />
    </section>
  );
}

export default NewProject;
