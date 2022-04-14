import { useEffect, useState } from "react";

export default function DataFetching() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);

          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchData();
    },
    { url }
  );

  return { loading, error, data };
}
