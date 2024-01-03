import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoints, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoints}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "4419adff57mshcda8402ca05ce7fp1f8f8cjsn8e213192094b",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.request(options);
      setData(data.data);
      console.log("Data : ", data);
    } catch (error) {
      console.log("erro", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
