import { useEffect, useRef } from "react";

export const useOutsideClick = (handler: Function, listen = true) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listen);
  }, [handler, listen]);

  return ref;
};
