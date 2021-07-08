import { render, screen } from "@testing-library/react";

import Cards from "../../pages/cards";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        query: {
          q: "test-any-query",
        },
      };
    },
  };
});

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

jest.mock("axios");

describe("Cards Page", () => {
  it("should render correctly", async () => {
    render(<Cards />);

    expect(screen.getByText(/Não foram encontrados/i)).toBeInTheDocument();
  });

  it("should show search custom message if user has searched for a pokemon", async () => {
    render(<Cards />);

    expect(screen.getByText(/test-any-query/i)).toBeInTheDocument();
  });
});
