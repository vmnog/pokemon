import { render } from "@testing-library/react";

import CardPage from "../../pages/cards/[id]";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        query: {
          id: "test-any-id",
        },
      };
    },
  };
});

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

describe("Card Page", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<CardPage />);

    const CardPageElement = getByTestId("card-page-element");

    expect(CardPageElement).toBeInTheDocument();
  });
});
