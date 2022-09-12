import React, { createContext } from 'react';
import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import BaseLayout from './layout/Base';

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
        <BaseLayout>123</BaseLayout>
      </ThemeProvider>
    </Config.Provider>
  );
}

export default App;
