import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!url) return; // 👈 prevents request when URL is null

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch the authentication token from local storage
        const token = localStorage.getItem("jwtToken");

        // Include the token in the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const res = await axios.get(`${apiUrl}/api${url}`, {
          headers, // Include the headers in the request
        });

        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    if (!url) return;
    setLoading(true);
    try {
      // Fetch the authentication token from local storage
      const token = localStorage.getItem("jwtToken");

      // Include the token in the request headers
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const res = await axios.get(`${apiUrl}/api${url}`, {
        headers, // Include the headers in the request
      });

      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
