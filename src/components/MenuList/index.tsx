import { MenuItem } from "../MenuItem";

import styles from "./styles.module.scss";

export function MenuList() {
  return (
    <div className={styles.listContainer}>
      <MenuItem backgroundColor="green" label="Cards" />
      <MenuItem backgroundColor="red" label="Sets" />
      <MenuItem backgroundColor="blue" label="Tipos" />
      <MenuItem backgroundColor="yellow" label="Subtipos" />
      <MenuItem backgroundColor="purple" label="Super Tipos" />
      <MenuItem backgroundColor="brown" label="Raridades" />
    </div>
  );
}
