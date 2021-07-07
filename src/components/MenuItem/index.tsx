import Image from "next/image";

import styles from "./styles.module.scss";

import PokeballImage from "../../assets/pokeball-white.png";
import { useRouter } from "next/dist/client/router";

interface MenuItemProps {
  backgroundColor: "green" | "red" | "blue" | "yellow" | "purple" | "brown";
  label: string;
  redirectTo?: string;
}

export function MenuItem({
  backgroundColor,
  label,
  redirectTo,
}: MenuItemProps) {
  // Hooks
  const router = useRouter();

  // Handling when user clicks on Menu Item
  const handleRedirect = (redirectTo: string) =>
    redirectTo && router.push(redirectTo);

  return (
    <div
      className={styles[backgroundColor]}
      onClick={() => handleRedirect(redirectTo)}
    >
      <b>{label}</b>
      <Image src={PokeballImage} alt="pokeball background" />
    </div>
  );
}
