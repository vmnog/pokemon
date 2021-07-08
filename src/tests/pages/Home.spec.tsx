import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

describe("Home Page", () => {
  it("should render correctly", () => {
    render(<Home />);

    expect(
      screen.getByText("Qual Pokemón você está procurando?")
    ).toBeInTheDocument();
  });
});
