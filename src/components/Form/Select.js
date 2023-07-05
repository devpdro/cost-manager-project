import styles from "../../styles/Select.module.css";

function Select() {
  return (
    <div className={styles.container}>
      <label htmlFor="">Selecione uma categoria:</label>
      <select>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
}

export default Select;
