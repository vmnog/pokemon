import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";

import styles from "./styles.module.scss";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ onChange }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <MdSearch size={30} color="var(--gray-900)" />
      <input
        type="text"
        placeholder="Procure por um Pokemón"
        onChange={onChange}
      />
    </div>
  );
}
