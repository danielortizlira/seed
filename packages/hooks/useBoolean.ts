import React from 'react';

type Helpers = {
  on: () => void;
  off: () => void;
  toggle: () => void;
  setValue: (value: boolean) => void;
};

/**
 * This hook provide some helpers to make
 * the use of boolean flags easier.
 * @param initialState boolean - The initial state 
 */
export const useBoolean = (initialState?: boolean): [boolean, Helpers] => {
  const [state, setState] = React.useState<boolean>(initialState || false);

  React.useEffect(() => {
    setState(initialState || false);
  }, [initialState]);

  const helpers = React.useMemo(
    (): Helpers => ({
      on: () => setState(true),
      off: () => setState(false),
      toggle: () => setState(current => !current),
      setValue: (value: boolean) => setState(value)
    }),
    [],
  );

  return [state, helpers];
};
