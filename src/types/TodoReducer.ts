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
  payload: TodoWithOptionalProps & { id: string };
}

type DeleteTodo = {
  type: 'delete',
  payload: { id: string }
}

export type TodoAction = AddTodo | ChangeTodo | DeleteTodo;
