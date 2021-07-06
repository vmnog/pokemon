import styles from "./styles.module.scss";

export function Input() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder="Procure por um Pokemon" />
    </div>
  );
}
