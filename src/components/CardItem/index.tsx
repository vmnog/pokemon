import Image from "next/image";
import { useRouter } from "next/router";
import { ICard } from "../../interfaces/card";
import { isArrayFilled } from "../../utils/isArrayFilled";

import styles from "./styles.module.scss";

interface CardItemProps {
  card: ICard;
}

const greenTypes = ["Grass"];
const redTypes = ["Fire", "Fighting"];
const blueTypes = ["Fairy", "Water"];
const yellowTypes = ["Lightning"];
const purpleTypes = ["Darkness", "Metal", "Psychic"];
const brownTypes = ["Dragon", "Colorless"];

export function CardItem({ card }: CardItemProps) {
  // Hooks
  const router = useRouter();

  // Defines a className(color) by passing Pokemon type
  const handleCardColorByType = (type: string) => {
    if (greenTypes.includes(type)) return "green";
    if (redTypes.includes(type)) return "red";
    if (blueTypes.includes(type)) return "blue";
    if (yellowTypes.includes(type)) return "yellow";
    if (purpleTypes.includes(type)) return "purple";
    if (brownTypes.includes(type)) return "brown";
  };

  // If pokemon card has a type it will define a color, else it will define default className
  const handleCardClassName = (types: string[]) =>
    isArrayFilled(types)
      ? styles[handleCardColorByType(types[0])]
      : styles.itemContainer;

  const handleCheckDetails = () => router.push(`cards/${card.id}`);

  return (
    <div
      className={handleCardClassName(card.types)}
      onClick={handleCheckDetails}
    >
      <strong>{card.name}</strong>
      <i>{card.id}</i>
      <i>{card.supertype}</i>
      <div>
        <div className={styles.typesContainer}>
          {isArrayFilled(card.types) &&
            card.types.map((type) => (
              <div key={type}>
                <span>{type}</span>
              </div>
            ))}
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={String(card.images.small)}
            alt={card.name}
            width="100"
            height="140"
          />
        </div>

        <section />
      </div>
    </div>
  );
}
