import Image from "next/image";

import styles from "./styles.module.scss";

import PokeballImage from "../../assets/pokeball-white.png";

interface MenuItemProps {
  backgroundColor: "green" | "red" | "blue" | "yellow" | "purple" | "brown";
  label: string;
}

export function MenuItem({ backgroundColor, label }: MenuItemProps) {
  return (
    <div className={styles[backgroundColor]}>
      <b>{label}</b>
      <Image src={PokeballImage} />
    </div>
  );
}
