import { Todo } from './Todo';

export type TodoState = Todo[];

type TodoWithOptionalProps = {
  [Key in keyof Todo]?: Todo[Key];
}

type AddTodo = {
  type: 'add';
  payload: Todo | Todo[];
}

type ChangeTodo = {
  type: 'change';
  payload: TodoWithOptionalProps;
}

type DeleteTodo = {
  type: 'delete',
  payload: { id: string }
}

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo;
