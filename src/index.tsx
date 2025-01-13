import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { TodoContextProvider } from './contexts/TodoComponent.tsx';

import App from './App.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>,
);
