import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { api } from "../../../services/api";
import { ICard } from "../../../interfaces/card";

import styles from "./styles.module.scss";
import { isArrayFilled } from "../../../utils/isArrayFilled";

export default function CardPage() {
  // States
  const [card, setCard] = useState<ICard | null>(null);
  const [loading, setLoading] = useState(false);

  // Hooks
  const router = useRouter();

  const { id } = router.query;

  // Load details by card id
  const handleLoadCard = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await api.get(`cards/${id}`);

      console.log(data);
      setCard(data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleLoadCard();
  }, [handleLoadCard]);

  return (
    <>
      {loading && <h1>Carregando...</h1>}

      {!loading && !card && (
        <h1>Não foi possível encontrar o pokemon desejado</h1>
      )}

      {!!card && !loading && (
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={String(card.images.large)}
              alt={card.name}
              width="100"
              height="140"
            />
          </div>
          <span>{card.name}</span>
          <span>{card.id}</span>
          <span>types: {isArrayFilled(card.types) && card.types[0]}</span>

          {isArrayFilled(card.attacks) && (
            <>
              <span>attacks name: {card.attacks[0].name}</span>
              <span>attacks cost: {card.attacks[0].convertedEnergyCost}</span>
              <span>attacks damage: {card.attacks[0].damage}</span>
              <span>attacks text: {card.attacks[0].text}</span>
            </>
          )}

          {isArrayFilled(card.resistances) && (
            <>
              <span>resistance: {card.resistances[0].type}</span>
              <span>resistance: {card.resistances[0].value}</span>
            </>
          )}

          {isArrayFilled(card.weaknesses) && (
            <>
              <span>
                weaknesses: {card.weaknesses[0].type} {card.weaknesses[0].value}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}
