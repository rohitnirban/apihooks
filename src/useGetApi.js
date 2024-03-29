import { useState, useEffect } from "react";
import axios from "axios";

export const useGetApi = (urlPath, headers) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        const fetchData = async () => {
            try {
                const response = await axios.get(urlPath, { headers });
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [urlPath, headers]); 

    return {
        isLoading,
        error,
        data,
    };
};