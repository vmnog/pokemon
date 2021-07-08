import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { Input } from "../components/Input";

import styles from "./home.module.scss";

export default function Home() {
  // States
  const [search, setSearch] = useState("");

  // Hooks
  const router = useRouter();

  // Handling pokemon card search by user's input
  const handleSearchCards = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`cards?q=${search}`);
  };

  return (
    <>
      <Head>
        <title>Início | Pokemón</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.background} />

        <section>
          <h1>Qual Pokemón você está procurando?</h1>
        </section>

        <form className={styles.inputContainer} onSubmit={handleSearchCards}>
          <Input onChange={(e) => setSearch(e.target.value)} />
        </form>

        <Link href="/cards">
          <a>Ver todas as cartas</a>
        </Link>
      </main>
    </>
  );
}
