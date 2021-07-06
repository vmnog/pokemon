import Head from "next/head";

import { MdKeyboardArrowDown } from "react-icons/md";

import { useRouter } from "next/dist/client/router";

import styles from "./styles.module.scss";
import { useCallback, useEffect } from "react";

export default function Home() {
  // Hooks
  const router = useRouter();

  // Handling loading cards from input search
  const handleLoadCards = useCallback(() => {
    console.log(router.query.q);
  }, [router]);

  // Loading cards by search when page loads
  useEffect(() => {
    handleLoadCards();
  }, [handleLoadCards]);

  return (
    <>
      <Head>
        <title>Cartas | Pokemon</title>
      </Head>

      <main className={styles.contentContainer}>
        {router.query.q ? (
          <h1>{`Cartas correspondentes à pesquisa "${router.query.q}"`}</h1>
        ) : (
          <h1>Cartas</h1>
        )}

        <MdKeyboardArrowDown size={40} color="var(--gray-900)" />
      </main>
    </>
  );
}
