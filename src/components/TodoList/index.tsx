import { useContext, useState } from 'react';

import { TodoContext } from '../../contexts/TodoContext';

import TodoItem from '../TodoItem';

import { Container } from './styles';

export default function TodoList() {
  const [idOfTheTaskBeingEdited, setIdOfTheTaskBeingEdited] = useState<number | null>(null);

  const { state } = useContext(TodoContext);

  const isDone = state.filter(({ isDone }) => isDone === true);

  function handleEditingATask(taskId: number) {
    setIdOfTheTaskBeingEdited(taskId);
  }

  return (
    <Container>
      <p>{isDone.length} de {state.length} concluídas.</p>
      {state.map((task) => (
        <TodoItem
          key={task.id}
          data={task}
          idOfTheTaskBeingEdited={idOfTheTaskBeingEdited}
          onEditingATask={handleEditingATask}
          onClose={() => setIdOfTheTaskBeingEdited(null)}
        />
      ))}
    </Container>
  );
}
