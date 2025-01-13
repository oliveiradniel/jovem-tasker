import React, { useReducer } from 'react';

import { initialState, todoReducer } from './reducers/todoReducer';

import { TodoContext } from './TodoContext';

type TodoContextProviderProps = {
  children: React.ReactNode;
}

// separar o TodoContext para ter o contexto separado do componente

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
