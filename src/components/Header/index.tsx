import { useRouter } from "next/router";
import { MdKeyboardBackspace } from "react-icons/md";

import styles from "./styles.module.scss";

interface HeaderProps {
  iconTheme: "dark" | "light";
}

export function Header({ iconTheme }: HeaderProps) {
  // Hooks
  const router = useRouter();

  return (
    <header className={styles.headerContainer}>
      <button onClick={() => router.back()}>
        <MdKeyboardBackspace
          size={30}
          color={iconTheme === "dark" ? "var(--white)" : "var(--gray-900)"}
        />
      </button>
    </header>
  );
}
