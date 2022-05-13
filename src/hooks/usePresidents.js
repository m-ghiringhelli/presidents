import { useContext } from 'react';
import { presidentContext } from '../context/PresidentContext';

export function usePresidents() {
  const context = useContext(presidentContext);

  if (context === undefined) {
    throw new Error('usePresidents must be used within a context provider');
  }

  return context;
}