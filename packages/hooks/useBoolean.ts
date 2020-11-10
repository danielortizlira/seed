import React from 'react';

type Helpers = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

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
    }),
    [],
  );

  return [state, helpers];
};
