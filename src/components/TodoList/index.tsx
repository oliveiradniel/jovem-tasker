import { useContext, useState } from 'react';

import { TodoContext } from '../../contexts/TodoContext';

import TodoItem from '../TodoItem';

import { Container } from './styles';

type HandleSavingTodoChangePrps = {
  id: number;
  title: string;
}

export default function TodoList() {
  const [idOfTheTaskBeingEdited, setIdOfTheTaskBeingEdited] = useState<number | null>(null);

  const { state, dispatch } = useContext(TodoContext);

  function handleEditingATask(taskId: number) {
    setIdOfTheTaskBeingEdited(taskId);
  }

  function handleSavingTodoChange({ id, title }: HandleSavingTodoChangePrps) {
      dispatch({ type: 'change', payload: { id, title } });
    }

  return (
    <Container>
      {state.map((task) => (
        <TodoItem
          key={task.id}
          data={task}
          idOfTheTaskBeingEdited={idOfTheTaskBeingEdited}
          onEditingATask={handleEditingATask}
          onClose={() => setIdOfTheTaskBeingEdited(null)}
          onSavingTodoChange={handleSavingTodoChange}
        />
      ))}
    </Container>
  );
}
