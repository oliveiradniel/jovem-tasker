import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { TodoContextProvider } from './contexts/TodoComponent.tsx';

import { GlobalStyles } from './assets/styles/global.ts';
import styles from './assets/styles/default';

import { ThemeProvider } from 'styled-components';

import App from './App.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <TodoContextProvider>
      <ThemeProvider theme={styles}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </TodoContextProvider>
  </StrictMode>,
);
