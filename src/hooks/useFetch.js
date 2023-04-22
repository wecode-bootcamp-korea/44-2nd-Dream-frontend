import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  return [data, setData];
};

export default useFetch;
