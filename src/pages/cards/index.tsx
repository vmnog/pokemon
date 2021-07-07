import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";

import { CardsList } from "../../components/CardsList";

import { api } from "../../services/api";

import { ICard } from "../../interfaces/card";

import styles from "./styles.module.scss";
import { isArrayFilled } from "../../utils/isArrayFilled";

export default function Home() {
  // States
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<ICard[]>([] as ICard[]);

  // Hooks
  const router = useRouter();

  // Handling loading cards from input search
  const handleLoadCards = useCallback(async () => {
    try {
      setLoading(true);

      const {
        data: { data },
      } = await api.get("cards", {
        params: {
          q: "supertype:pokemon " + `name:${router.query.q || ""}*`,
          page: 1,
          pageSize: 20,
          orderBy: "name",
        },
      });

      setCards(data);
      setLoading(false);
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  }, [router]);

  // Loading cards by search when page loads
  useEffect(() => {
    handleLoadCards();
  }, [router, handleLoadCards]);

  return (
    <>
      <Head>
        <title>Cartas | Pokemon</title>
      </Head>

      <main className={styles.contentContainer}>
        {router.query.q ? (
          <h1>{`Cartas correspondentes à pesquisa "${router.query.q}"`}</h1>
        ) : (
          <h1>Todas as cartas</h1>
        )}

        <MdKeyboardArrowDown size={40} color="var(--gray-900)" />

        {isArrayFilled(cards) && <CardsList cards={cards} />}

        {loading && <h3>Carregando...</h3>}
      </main>
    </>
  );
}
