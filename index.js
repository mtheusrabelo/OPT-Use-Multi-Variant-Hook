import { useState, useEffect, useCallback } from "react";

export const useMultiVariant = (experiment) => {
  const [variant, setVariant] = useState(null);

  const handleMultiVariant = useCallback((event) => {
    setVariant(event.detail());
  });

  useEffect(() => {
    window.addEventListener(experiment, handleMultiVariant);

    return () => {
      window.removeEventListener(experiment, handleMultiVariant);
    };
  }, [experiment, handleMultiVariant]);

  return variant;
};
