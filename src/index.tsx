import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { TodoContextProvider } from './contexts/TodoComponent.tsx';

import { GlobalStyles } from './styles/global.ts';

import { ThemeProvider } from 'styled-components';

import App from './App.tsx';

import styles from './styles/default';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <TodoContextProvider>
      <ThemeProvider theme={styles}>
        <GlobalStyles />
      </ThemeProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>,
);
