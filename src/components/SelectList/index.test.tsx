import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should render the selected city details", () => {
    const data = [
      {
        id: "1",
        name: "São Paulo",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        latitude: 789,
        longitude: 101,
      },
    ];

    const onPress = jest.fn();

    render(
      <SelectList
        data={data}
        placeholder="Buscar local"
        value="São Paulo"
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText("São Paulo");

    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(data[0]);
  });

  it("should not show the options if data is empty", () => {
    render(
      <SelectList
        data={[]}
        placeholder="Buscar local"
        value="São Paulo"
        onChange={() => {}}
        onPress={() => {}}
      />
    );

    const options = screen.getByPlaceholderText("Buscar local");

    expect(options.children).toHaveLength(0);
  });
});
