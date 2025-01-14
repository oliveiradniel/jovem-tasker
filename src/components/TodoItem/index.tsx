import { ChangeEvent, useContext } from 'react';

import TrashIcon from '../../assets/icons/trash.svg?react';

import { Todo } from '../../types/Todo';
import { TodoContext } from '../../contexts/TodoContext';

import { Container } from './styles';

type TodoItemProps = {
  data: Todo;
}

export default function TodoItem({ data }: TodoItemProps) {
  const { dispatch } = useContext(TodoContext);

  function handleDeleteTodo() {
    dispatch({ type: 'delete', payload: { id: data.id } });
  }

  function handleToggleIsDoneTodo(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'change', payload: { id: data.id, isDone: event.target.checked } });
  }

  return (
    <Container $isDone={data.isDone}>
      <div className="is-done-container">
        <input
          type="check-box"
          checked={data.isDone}
          onChange={handleToggleIsDoneTodo}
        />
      </div>

      <div className="task-title-container">
        {data.title}
      </div>

      <div className="delete-task-container">
        <button
          type='button'
          onClick={handleDeleteTodo}
        >
          <TrashIcon />
        </button>
      </div>
    </Container>
  );
}
