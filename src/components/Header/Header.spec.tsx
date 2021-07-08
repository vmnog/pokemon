import { render } from "@testing-library/react";

import { Header } from "./";

describe("Header Component", () => {
  it("should renders header correctly", () => {
    const { getByTestId } = render(<Header iconTheme="dark" />);

    const BackIconElement = getByTestId("back-icon");

    expect(BackIconElement).toBeInTheDocument();
  });

  it("should change color to gray when theme is light", () => {
    const { getByTestId } = render(<Header iconTheme="light" />);

    const BackIconElement = getByTestId("back-icon");

    expect(BackIconElement).toHaveAttribute("color", "var(--gray-900)");
  });

  it("should change color to white when theme is dark", () => {
    const { getByTestId } = render(<Header iconTheme="dark" />);

    const BackIconElement = getByTestId("back-icon");

    expect(BackIconElement).toHaveAttribute("color", "var(--white)");
  });
});
