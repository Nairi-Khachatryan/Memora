import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/theme/ThemeProvider.tsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { StrictMode } from 'react';
import { App } from './App.tsx';
import './styles/global.scss';

const querryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <QueryClientProvider client={querryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
