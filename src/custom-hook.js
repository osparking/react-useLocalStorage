import { useEffect, useState } from "react";

/**
 * Custom hook that saves item into the local storage
 * 
 * @param {*} key - local storage Item Key
 * @param {*} initial - local storage Item' initial value
 * @returns 
 */
export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? savedValue : initial;
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  const removeKey = () => {
    localStorage.removeItem(key);
  };

  return [value, setValue, removeKey];
};
