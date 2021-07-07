import { CardItem } from "../CardItem";

import { ICard } from "../../interfaces/card";

import styles from "./styles.module.scss";

interface CardsListProps {
  cards: ICard[];
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <div className={styles.listContainer}>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
