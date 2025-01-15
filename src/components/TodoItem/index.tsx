import { ChangeEvent, useContext } from 'react';

import TrashIcon from '../../assets/icons/trash.svg?react';
import EditIcon from '../../assets/icons/edit.svg?react';

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
      <input
        type="checkbox"
        checked={data.isDone}
        onChange={handleToggleIsDoneTodo}
      />

      <div className="task-title-container">
        <p>{data.title}</p>
      </div>

      <div className="actions-task-container">
        <button
          type='button'
          className='edit'
          onClick={() => {}}
        >
          <EditIcon />
        </button>
        <button
          type='button'
          className='delete'
          onClick={handleDeleteTodo}
        >
          <TrashIcon />
        </button>
      </div>
    </Container>
  );
}
