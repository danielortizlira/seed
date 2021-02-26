import * as React from 'react';

type Configuration = {};

const DEFAULT_CONFIG = {};

export const ConfigurationContext = React.createContext<Configuration>(DEFAULT_CONFIG);

export const useSlangAtomsConfigurationContext = () => React.useContext(ConfigurationContext);
