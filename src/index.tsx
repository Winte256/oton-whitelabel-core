import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/index';
import { Provider } from 'react-redux';
import routerConfig from './routes/routerConfig';
import App from './App';

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={6}>
      <Provider store={store}>
        <App>
          <RouterProvider router={routerConfig} />
        </App>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
