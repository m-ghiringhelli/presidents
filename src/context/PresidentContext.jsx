import { createContext, useEffect, useState } from 'react';
import { fetchPresidents } from '../services/presidents';

export const presidentContext = createContext();

export function ProvidePresidents({ children }) {
  // initialize state
  const [presidents, setPresidents] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPresidents();
      console.log(data);
      setPresidents(data);
    }
    getData();
  }, []);

  return (
    <presidentContext.Provider value={{ presidents, loading }}>
      {children}
    </presidentContext.Provider>
  );
}