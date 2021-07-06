import Head from "next/head";
import { Input } from "../components/Input";
import { MenuList } from "../components/MenuList";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Pokemon</title>
      </Head>

      <main className={styles.contentContainer}>
        <section>
          <h1>Qual Pokemon</h1>
          <h1>você está procurando?</h1>
        </section>

        <div className={styles.inputContainer}>
          <Input />
        </div>

        <MenuList />
      </main>
    </>
  );
}
