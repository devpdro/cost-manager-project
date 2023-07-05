import styles from "../../styles/Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
       
      </select>
    </div>
  );
}

export default Select;
