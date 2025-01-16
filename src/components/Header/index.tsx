import { ChangeEvent, useContext, useState } from 'react';

import { TodoContext } from '../../contexts/TodoContext';

import Input from '../Input';
import Button from '../Button';
import FormGroup from '../FormGroup';

import { Container } from './styles';

export default function Header() {
  const [taskValue, setTaskValue] = useState('');
  const [error, setError] = useState('');

  const { state, dispatch } = useContext(TodoContext);

  const id = Math.random();

  const isFormValid = taskValue.length > 0;

  function handleNewTask() {
    const taskExists = state.find(({ title }) => {
      const taskValueCaptalize = taskValue.toUpperCase().trim();
      const titleCaptalize = title.toUpperCase().trim();

      return taskValueCaptalize === titleCaptalize;
    });

    if (taskExists) {
      setError('Já existe uma tarefa com este título!');
      return;
    }
    dispatch({ type: 'add', payload: { id, title: taskValue, isDone: false }});
    setTaskValue('');
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setError('');
    setTaskValue(event.target.value);
  }

  return (
    <Container>
      <img
        src='/logo.svg'
        alt="Jovem Tasker"
        width={270}
      />

      <form>
        <div className="task-input">
          <FormGroup error={error}>
            <Input
              value={taskValue}
              placeholder='Digite uma nova tarefa'
              isError={!!error}
              onChange={handleInputChange}
            />
          </FormGroup>
        </div>

        <Button
          disabled={!isFormValid}
          onClick={handleNewTask}
        />
      </form>
    </Container>
  );
}
