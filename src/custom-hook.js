import { useEffect, useState } from "react";

export const useLocalStorage = (key, init) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? savedValue : init;
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [value]);

  function removeKey() {
    localStorage.removeItem(key);
  }

  return {value, setValue, removeKey};

};
