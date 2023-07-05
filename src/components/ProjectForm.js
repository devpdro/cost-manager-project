import styles from "../styles/ProjectForm.module.css";

import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import Submit from "../components/Form/Submit";

function ProjectForm({ btnText }) {
  return (
      <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
      />
      <Submit text={btnText} />
      </form>
  );
}

export default ProjectForm;
