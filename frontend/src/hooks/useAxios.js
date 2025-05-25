import axios from "axios";
import { useEffect, useState } from "react";
const useAxios = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const get = async (url) => {
    try {
      const res = await axios.get(url);
      setLoading(false);
      return res.data;
    } catch (e) {
      setError(e);
    }
  };

  const post = async (url, newData) => {
    try {
      const res = await axios.post(url, newData);
      return res.data;
    } catch (e) {
      setError(e);
    }
  };
  const patch = async (url, id, newData) => {
    try {
      const res = await axios.patch(`${url}/${id}`, newData);
      return res.data;
    } catch (e) {
      setError(e);
    }
  };

  return { get, post, patch, loading, error };
};

export default useAxios;
