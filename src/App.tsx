import React, { createContext, Suspense } from 'react';
import { SWRConfig } from 'swr'
// import '../public/favicon.ico';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import { Counter } from './components/Counter';
import fetcher from './utils/fetcher';

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
      <SWRConfig
        value={{
          fetcher: fetcher
        }}
      >
        <ThemeProvider theme={themeOptions}>
          <Box sx={{
            bgcolor: 'background.default',
            height: '100vh'
          }}>
            <Suspense fallback="loading">{children || <Counter />}</Suspense>
          </Box>
        </ThemeProvider>
      </SWRConfig>
    </Config.Provider>
  );
};

export default App;
