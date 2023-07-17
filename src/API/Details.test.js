import { APIKey } from "../config/key";
import GetDetails from "./Details";

describe("GetDetails", () => {
  it("should fetch movie details correctly", async () => {
    const mockResponse = {
      id: 123,
      title: "Movie Title",
      poster_path: "/path/to/poster.jpg",
      overview: "Movie overview",
      release_date: "2023-06-15",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const id = 123;
    const image_path = "https://example.com/images";

    const result = await GetDetails(id, image_path);

    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=us-US&page=1`
    );

    expect(result).toEqual({
      id: 123,
      title: "Movie Title",
      overview: "Movie overview",
      image: "https://example.com/images/path/to/poster.jpg",
      releaseDate: "2023-06-15",
    });''
  });
});
