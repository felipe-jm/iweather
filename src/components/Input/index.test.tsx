import { render, screen } from "@testing-library/react-native";

import { Input } from ".";

describe("Component: Input", () => {
  it("should render without activity indicator if isLoading is false", () => {
    render(<Input placeholder="Buscar local" />);

    expect(screen.getByPlaceholderText("Buscar local")).toBeTruthy();
  });

  it("should render with activity indicator if isLoading is true", () => {
    render(<Input placeholder="Buscar local" isLoading />);

    expect(screen.getByPlaceholderText("Buscar local")).toBeTruthy();
  });
});
