import { TodoActions, TodoState } from '../../types/TodoReducer';

export const initialState: TodoState = [];

export function todoReducer(state: TodoState, action: TodoActions) {
  switch (action.type) {
    case 'add': {
      const { payload } = action;

      return !Array.isArray(payload) ? [...state, payload] : payload;
    }
    case 'change': {
      const changedTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }

        return todo;
      });

      return changedTodos;
    }
    case 'delete': {
      const filteredTodos = state.filter(({ id }) => id !== action.payload.id);
      return filteredTodos;
    }
    default:
      return state;
  }
}
