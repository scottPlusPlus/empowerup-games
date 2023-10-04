'use client'

import { useEffect, useState } from "react";

export function useStateWithLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {

  var initial = initialValue;
  if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      initial = storedValue ? JSON.parse(storedValue) : initialValue;
  }

  // Set up the state
  const [state, setState] = useState<T>(initial);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}