import { fetchBikeThefts } from "../api";

describe("fetchBikeThefts function", () => {
  it("should fetch bike thefts from the API", async () => {
    const result = await fetchBikeThefts("munich");

    expect(result).toHaveProperty("bikeThefts");
    expect(result).toHaveProperty("totalCount");

    expect(result.bikeThefts.length).toBeGreaterThan(0);

    result.bikeThefts.forEach((theft) => {
      expect(theft).toHaveProperty("id");
      expect(theft).toHaveProperty("title");
      expect(theft).toHaveProperty("description");
      expect(theft).toHaveProperty("date_stolen");
      expect(theft).toHaveProperty("thumb");
    });
  });
});
