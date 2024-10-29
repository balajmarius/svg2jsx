import { useEffect } from "react";
import { useToggle, useLocalStorage } from "usehooks-ts";

export const useLocalStorageToggle = (key: string, defaultValue?: boolean) => {
  const [stored, store] = useLocalStorage<boolean | undefined>(key, defaultValue);
  const [value, toggle] = useToggle(stored);

  useEffect(() => {
    store(value);
  }, [value]);

  return [value, toggle] as const;
};
