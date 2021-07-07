import Head from "next/head";
import { Input } from "../components/Input";
import { FormEvent, useState } from "react";
import { MenuList } from "../components/MenuList";
import { useRouter } from "next/dist/client/router";

import styles from "./home.module.scss";

export default function Home() {
  // States
  const [search, setSearch] = useState("");

  // Hooks
  const router = useRouter();

  // Handling pokemon card search by user's input
  const handleSearchCards = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search) {
      router.push(`cards?q=${search}`);
    }
  };

  return (
    <>
      <Head>
        <title>Início | Pokemon</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.background} />

        <section>
          <h1>Qual Pokemon você está procurando?</h1>
        </section>

        <form className={styles.inputContainer} onSubmit={handleSearchCards}>
          <Input onChange={(e) => setSearch(e.target.value)} />
        </form>

        <MenuList />
      </main>
    </>
  );
}
