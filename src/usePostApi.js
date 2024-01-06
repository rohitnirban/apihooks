import { useState, useEffect } from "react";
import axios from "axios";

export const usePostApi = (urlPath, sendingData = null, headers) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  setPostData(sendingData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await axios.post(urlPath, postData, { headers });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    if (data !== null) {
      fetchData();
    }
  }, []);

  return {
    isLoading,
    error,
    data: data ? data : null,
  };
};