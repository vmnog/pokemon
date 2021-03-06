import Head from "next/head";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { CardsList } from "../../components/CardsList";
import { InfiniteScroll } from "../../components/InfiniteScroll";

import { api } from "../../services/api";
import { ICard } from "../../interfaces/card";
import { isArrayFilled } from "../../utils/isArrayFilled";

import styles from "./styles.module.scss";

export default function Cards() {
  // States
  const [loading, setLoading] = useState(false);
  const [hasMoreToLoad, sethasMoreToLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState<ICard[]>([] as ICard[]);

  // Hooks
  const router = useRouter();

  // Handling loading cards from input search
  const handleLoadCards = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get("cards", {
        params: {
          q: "supertype:pokemon " + `name:${router.query.q || ""}*`,
          page: 1,
          pageSize: 20,
          orderBy: "name",
        },
      });

      setCards(data.data);
      sethasMoreToLoad(true);
      setCurrentPage((state) => state + 1);
      setLoading(false);

      return;
    } catch (err) {
      setLoading(false);
      return;
    }
  }, [router]);

  // Handling infinite scroll api request
  const fetchMore = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get("cards", {
        params: {
          q: "supertype:pokemon " + `name:${router.query.q || ""}*`,
          page: currentPage,
          pageSize: 20,
          orderBy: "name",
        },
      });

      if (data.data.length === 0) {
        sethasMoreToLoad(false);
        setLoading(false);

        return;
      }

      setCards((state) => [...state, ...data.data]);

      setCurrentPage((state) => state + 1);
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      return;
    }
  }, [router, currentPage]);

  // Loading cards by search when page loads
  useEffect(() => {
    handleLoadCards();

    //eslint-disable-next-line
  }, [router]);

  return (
    <>
      <Head>
        <title>Cartas | Pokemon</title>
      </Head>

      <main className={styles.contentContainer}>
        <Header iconTheme="light" />

        {router.query.q ? (
          <h1>{`Cartas correspondentes ?? pesquisa "${router.query.q}"`}</h1>
        ) : (
          <h1>Todas as cartas</h1>
        )}

        <MdKeyboardArrowDown size={40} color="var(--gray-900)" />

        {isArrayFilled(cards) && <CardsList cards={cards} />}

        {isArrayFilled(cards) && !loading && hasMoreToLoad && (
          <InfiniteScroll fetchMore={fetchMore} />
        )}

        {loading && <h3>Carregando...</h3>}

        {!loading && !cards.length && (
          <h3>N??o foram encontrados resultados para sua busca.</h3>
        )}
      </main>
    </>
  );
}
