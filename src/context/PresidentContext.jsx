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
      setLoading(true);
      const data = await fetchPresidents();
      setPresidents(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <presidentContext.Provider value={{ presidents, loading }}>
      {children}
    </presidentContext.Provider>
  );
}