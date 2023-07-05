import styles from "../styles/NewProject.module.css";

import Input from "../components/Form/Input";
import InputOrca from "../components/Form/InputOrca"
import Select from "../components/Form/Select"
import Submit from "../components/Form/Submit";

function NewProject() {
  return (
    <section className={styles.container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Input />
      <InputOrca />
      <Select />
      <Submit />
      
    </section>
  );
}

export default NewProject;
