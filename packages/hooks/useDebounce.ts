import React from 'react';

/**
 * A hook that returns a debounced value
 * @param value any - the value to debounce
 * @param delay number - the delay in miliseconds
 */
export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
