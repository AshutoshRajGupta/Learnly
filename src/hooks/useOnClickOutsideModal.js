import { useEffect } from "react";

export const useOnClickOutsideModal = (ref, callback, toggleRef) => {
  useEffect(() => {
    const closeModal = (e) => {
      if (
        !ref.current?.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      )
        callback();
    };
    window.addEventListener("mousedown", closeModal);
    return () => window.removeEventListener("mousedown", closeModal);
  }, [ref, callback, toggleRef]);
};
