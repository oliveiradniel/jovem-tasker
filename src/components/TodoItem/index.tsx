import { ChangeEvent, useContext, useEffect, useState } from 'react';

import CancelIcon from '../../assets/icons/cancel.svg?react';
import CheckIcon from '../../assets/icons/check.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import EditIcon from '../../assets/icons/edit.svg?react';

import { Todo } from '../../types/Todo';
import { TodoContext } from '../../contexts/TodoContext';

import { ActionsTaskContainer, Container, Error } from './styles';

type TodoItemProps = {
  data: Todo;
  idOfTheTaskBeingEdited: number | null;
  onEditingATask: (taskId: number) => void;
  onClose: () => void;
}

export default function TodoItem({
  data,
  idOfTheTaskBeingEdited,
  onEditingATask,
  onClose,
}: TodoItemProps) {
  useEffect(() => {}, [idOfTheTaskBeingEdited]);

  const [titleOfTheTaskBeingEdited, setTitleOfTheTaskBeingEdited] = useState(data.title);
  const [error, setError] = useState('');

  const isEditing = idOfTheTaskBeingEdited === data.id;
  const isNotEditing = !isEditing && !!idOfTheTaskBeingEdited;

  const { state, dispatch } = useContext(TodoContext);

  function handleTitleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setError('');
    setTitleOfTheTaskBeingEdited(target.value);
  }

  function handleDeleteTodo() {
    dispatch({ type: 'delete', payload: { id: data.id } });
  }

  function handleSavingTodoChange() {
    const taskExists = state.find(({ title }) => {
      const taskValueCaptalize = titleOfTheTaskBeingEdited.toUpperCase().trim();
      const titleCaptalize = title.toUpperCase().trim();

      return taskValueCaptalize === titleCaptalize;
    });

    if (taskExists) {
      setError('Já existe uma tarefa com este título!');
      return;
    }

    setError('');
    dispatch({ type: 'change', payload: { id: data.id, title: titleOfTheTaskBeingEdited } });
    onClose();
  }

  function handleToggleIsDoneTodo(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'change', payload: { id: data.id, isDone: event.target.checked } });
  }

  return (
    <>
      <Container $isDone={data.isDone}>
        <input
          type="checkbox"
          checked={data.isDone}
          disabled={idOfTheTaskBeingEdited === data.id}
          onChange={handleToggleIsDoneTodo}
        />

        <div className="task-title-container">
          {isEditing ? (
            <input
              type="text"
              autoFocus
              value={titleOfTheTaskBeingEdited}
              placeholder={data.title}
              onChange={handleTitleChange}
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
      {error && <Error>{error}</Error>}
    </>
  );
}
