import { useContext } from 'react';

import { useSaveTodos } from '../../hooks/useSaveTodos';

import { TodoContext } from '../../contexts/TodoContext';

import TodoItem from '../TodoItem';
import Header from '../Header';

import { Container } from './styles';

export default function App() {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  const { state } = useContext(TodoContext);

  return (
    <Container>
      <Header />
      {state.map((task) => (
        <TodoItem data={task} />
      ))}
    </Container>
  );
}
