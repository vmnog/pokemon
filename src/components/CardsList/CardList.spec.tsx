import { render } from "@testing-library/react";
import { ICard } from "../../interfaces/card";

import { CardsList } from "./";

const mockedCards: ICard[] = [];

describe("CardList Component", () => {
  it("should renders cardlist correctly", () => {
    const { getByTestId } = render(<CardsList cards={mockedCards} />);

    const CardListElement = getByTestId("cardlist-element");

    expect(CardListElement).toBeInTheDocument();
  });
});
