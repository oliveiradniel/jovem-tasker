import React, { createContext } from 'react';

import { TodoActions, TodoState } from '../types/TodoReducer';

import { initialState } from './reducers/todoReducer';

type ContextType = {
  state: TodoState,
  dispatch: React.Dispatch<TodoActions>
}

export const TodoContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});
