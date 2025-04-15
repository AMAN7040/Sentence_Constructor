import { ApiResponse } from "../types/apiResponse";

export const fetchQuestions = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      "https://sentence-constructor-buf2.onrender.com/data"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch the questions");
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(
        err.message || "Something went wrong while fetching the questions"
      );
    }

    throw new Error("Something went wrong while fetching the questions");
  }
};
