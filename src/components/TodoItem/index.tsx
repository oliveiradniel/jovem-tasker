import { ChangeEvent, useContext, useEffect, useState } from 'react';

import CancelIcon from '../../assets/icons/cancel.svg?react';
import CheckIcon from '../../assets/icons/check.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import EditIcon from '../../assets/icons/edit.svg?react';

import { Todo } from '../../types/Todo';
import { TodoContext } from '../../contexts/TodoContext';

import { ActionsTaskContainer, Container } from './styles';

type TodoItemProps = {
  data: Todo;
  idOfTheTaskBeingEdited: number | null;
  onEditingATask: (taskId: number) => void;
  onClose: () => void;
  onSavingTodoChange: ({ id, title }: { id: number, title: string}) => void;
}

export default function TodoItem({
  data,
  idOfTheTaskBeingEdited,
  onEditingATask,
  onClose,
  onSavingTodoChange,
}: TodoItemProps) {
  useEffect(() => {}, [idOfTheTaskBeingEdited]);

  const [titleOfTheTaskBeingEdited, setTitleOfTheTaskBeingEdited] = useState(data.title);

  const isEditing = idOfTheTaskBeingEdited === data.id;
  const isNotEditing = !isEditing && !!idOfTheTaskBeingEdited;

  const { dispatch } = useContext(TodoContext);

  function handleDeleteTodo() {
    dispatch({ type: 'delete', payload: { id: data.id } });
  }

  function handleSavingTodoChange() {
    onSavingTodoChange({
      id: data.id,
      title: titleOfTheTaskBeingEdited,
    });
    onClose();
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
        {isEditing ? (
          <input
            type="text"
            autoFocus
            value={titleOfTheTaskBeingEdited}
            placeholder={data.title}
            onChange={({ target }) => setTitleOfTheTaskBeingEdited(target.value)}
          />
        ) : (
          <p>{data.title}</p>
        )}
      </div>

      <ActionsTaskContainer $disabled={isNotEditing}>
        {isEditing ? (
          <>
            <button type='button' className='cancel' onClick={onClose}>
              <CancelIcon fill='#fff' />
            </button>
            <button type='button' className='save' onClick={handleSavingTodoChange}>
              <CheckIcon fill='green' />
            </button>
          </>
        ) : (
          <>
            <button
              type='button'
              className='edit'
              onClick={() => onEditingATask(data.id)}
              disabled={isNotEditing}
              >
              <EditIcon />
            </button>
            <button
              type='button'
              className='delete'
              disabled={isNotEditing}
              onClick={handleDeleteTodo}
            >
              <TrashIcon />
            </button>
          </>
        )}
      </ActionsTaskContainer>
    </Container>
  );
}
