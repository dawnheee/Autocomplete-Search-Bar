import { useEffect, useState } from "react";

export const useDebounce = (word: string) => {
  const [debounced, setDebounced] = useState(word);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(word);
    }, 800);
    return () => {
      clearTimeout(handler);
    };
  }, [word]);

  return debounced;
};
