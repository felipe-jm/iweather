import { mockWeatherAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import { api } from "./api";

import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getCityByNameService", () => {
  it("should return the city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    });

    expect(response).toHaveProperty("today");
  });
});
