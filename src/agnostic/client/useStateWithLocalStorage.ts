'use client';

import { useEffect, useState } from "react";

export function useStateWithLocalStorage<T>(
    key: string,
    initialValue: T
  ): [T, React.Dispatch<React.SetStateAction<T>>] {
    // Try to get the stored value from local storage on initial load
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  
    // Set up the state
    const [state, setState] = useState<T>(initial);
  
    // Update local storage whenever the state changes
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
  
    return [state, setState];
  }