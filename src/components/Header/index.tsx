import { useContext, useState } from 'react';

import { TodoContext } from '../../contexts/TodoContext';

import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

export default function Header() {
  const [taskValue, setTaskValue] = useState('');

  const { dispatch } = useContext(TodoContext);

  const id = Math.random();

  function handleNewTask() {
    dispatch({ type: 'add', payload: { id, title: taskValue, isDone: false }});
    setTaskValue('');
  }

  return (
    <Container>
      <div className="logo-container">
        <img src='/logo.svg' alt="Jovem Tasker" />
      </div>

      <div className="new-task-container">
        <div className="new-task-input">
          <Input
            value={taskValue}
            placeholder='Digite uma nova tarefa'
            onChange={(event) => setTaskValue(event.target.value)}
          />
        </div>

        <Button
          onClick={handleNewTask}
        />
      </div>
    </Container>
  );
}
