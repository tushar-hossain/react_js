import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, seIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [filterUser, setFilter] = useState(data);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not found!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setFilter(data);
        seIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        seIsLoading(false);
      });
  }, []);

  return { data, isLoading, error, filterUser, setFilter };
};

export default useFetch;
