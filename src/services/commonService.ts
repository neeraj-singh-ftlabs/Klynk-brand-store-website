import Axios from "axios";
import Contants from "@/utils/constants";
// Type for the response data
export interface ApiResponse<T> {
  data: T;
}

// Function to fetch data either from API or local files
export const getMany = async <T>(route: string): Promise<T> => {
  const localApi = Contants.API_MODE === "local";
  if (localApi) {
    // Fetch data from local files
    const localFile = route.split("/").pop() as string; // Extract file name from URL
    try {
      const response = await import(`../data/${localFile}`);
      return response.default;
    } catch (error) {
      console.error("Error fetching local data:", error);
      throw error;
    }
  } else {
    // Fetch data from API
    try {
      const response = await Axios.get<ApiResponse<T>>(route);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching API data:", error);
      throw error;
    }
  }
};
