import React, { createContext, Suspense } from 'react';
// import '../public/favicon.ico';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Counter } from './components/Counter';

declare global {
  interface Window {
    config: any;
  }
}

export const { config = {} } = window;

export const Config = createContext(config);

export const themeOptions = createTheme({
  ...(config?.theme || {}),
});

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Config.Provider value={config}>
      <ThemeProvider theme={themeOptions}>
        <Suspense fallback="loading">{children || <Counter />}</Suspense>
      </ThemeProvider>
    </Config.Provider>
  );
};

export default App;
