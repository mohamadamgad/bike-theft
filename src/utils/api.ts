import { BikeTheft } from "../types/BikeTheft";

const API_BASE_URL = "https://bikeindex.org/api/v3";

export const fetchBikeThefts = async (
  titleFilter: string,
  startDateFilter?: any,
  endDateFilter?: any,
  location: string = "munich"
): Promise<{ bikeThefts: BikeTheft[]; totalCount: number }> => {
  const url = `${API_BASE_URL}/search?query=${titleFilter}&per_page=100&location=${location}&distance=50&stolenness=proximity`;

  const response = await fetch(url);
  const data = await response.json();

  let bikeThefts = data.bikes;

  if (startDateFilter || endDateFilter) {
    bikeThefts = bikeThefts.filter((theft: BikeTheft) => {
      const startDateMatch =
        new Date(theft.date_stolen * 1000) >= new Date(startDateFilter);
      const endDateMatch =
        new Date(theft.date_stolen * 1000) <= new Date(endDateFilter);

      return startDateMatch && endDateMatch;
    });
  }

  const totalCount = bikeThefts.length;

  return { bikeThefts, totalCount };
};
