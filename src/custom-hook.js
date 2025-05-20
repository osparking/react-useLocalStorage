import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    console.log("stored value: ", storedValue);
    
    return storedValue ? storedValue : initialValue;
  });

  function removeKey() {
    localStorage.removeItem(key);
  }

  useEffect(() => {
    console.log("useEffect: ", value);
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue, removeKey];
}
