/**
 * Custom hook to fetch question data.
 * @returns {Object} Contains data ,loading and error states.
 */

import { useCallback, useEffect, useState } from "react";
import { ApiResponse } from "../types/apiResponse";
import { fetchQuestions } from "../services/questionService";

export const useQuestions = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchedData = await fetchQuestions();
      setData(fetchedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occured");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
