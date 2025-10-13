import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/theme/ThemeProvider.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store.ts';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { App } from './App.tsx';
import './styles/global.scss';

const querryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <QueryClientProvider client={querryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </StrictMode>
);
