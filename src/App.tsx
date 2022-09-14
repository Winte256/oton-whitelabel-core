import React, { createContext } from 'react';
import '../public/favicon.ico';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BaseLayout from './layout/Base';
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

function App() {
  return (
    <Config.Provider value={config}>
      <ThemeProvider theme={themeOptions}>
        <BaseLayout>
          <Counter/>
        </BaseLayout>
      </ThemeProvider>
    </Config.Provider>
  );
}

export default App;
