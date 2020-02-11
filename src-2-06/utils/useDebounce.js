import React, {useState, useEffect} from "react";

const useDebounce = (value, delay) => {
  const [curValue, setValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(value)
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay])

  return curValue
};

export default useDebounce;
