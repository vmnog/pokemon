import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { api } from "../../../services/api";
import { ICard } from "../../../interfaces/card";

import { Header } from "../../../components/Header";

import { isArrayFilled } from "../../../utils/isArrayFilled";
import { handleCardColorByType } from "../../../utils/handleCardColorByType";

import styles from "./styles.module.scss";

export default function CardPage() {
  // States
  const [card, setCard] = useState<ICard | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

      setCard(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      handleLoadCard();
    }
  }, [handleLoadCard, id]);

  return (
    <>
      {!loading && error && (
        <div className={styles.errorContainer}>
          <Image
            width="300"
            height="300"
            src="https://pm1.narvii.com/6373/fdeba7755b87b04a45e0b8ba269e2371c33f8b6f_hq.jpg"
            alt="pikachu triste"
          />
          <h2 className={styles.title}>
            Não foi possível encontrar o pokemon desejado :(
          </h2>
        </div>
      )}

      {loading && <h2 className={styles.title}>Carregando...</h2>}

      {!!card && !loading && (
        <div className={styles[handleCardColorByType(card.types[0])]}>
          <section>
            <Header iconTheme="dark" />
            <div>
              <h1>{card.name}</h1>
              <span>{card.id}</span>
              <div>
                {isArrayFilled(card.types) &&
                  card.types.map((type) => (
                    <div key={type}>
                      <span>{type}</span>
                    </div>
                  ))}
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={String(card.images.large)}
                  alt={card.name}
                  width="290"
                  height="340"
                />
              </div>
            </div>
          </section>

          <main className={styles.attributesContainer}>
            <h1>Ataques</h1>
            {isArrayFilled(card.attacks) &&
              card.attacks.map((attack) => (
                <div key={attack.name} className={styles.attackContainer}>
                  <h1>{attack.name}</h1>
                  <div>
                    <strong>Custo: </strong>
                    <span>{attack.convertedEnergyCost || 0}</span>
                  </div>
                  <div>
                    <strong>Dano:</strong>
                    <span> {attack.damage || 0}</span>
                  </div>
                  <p>{attack.text}</p>
                </div>
              ))}

            <div className={styles.propertiesContainer}>
              {isArrayFilled(card.resistances) &&
                card.resistances.map((item) => (
                  <div key={item.type}>
                    <h1>Resistência</h1>
                    <strong>{item.type}</strong>
                    <span> {item.value}</span>
                  </div>
                ))}

              {isArrayFilled(card.weaknesses) &&
                card.weaknesses.map((item) => (
                  <div key={item.type}>
                    <h1>Fraquezas</h1>
                    <strong>{item.type}</strong>
                    <span> {item.value}</span>
                  </div>
                ))}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
