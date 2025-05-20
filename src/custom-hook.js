import { useEffect, useState } from "react";

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
