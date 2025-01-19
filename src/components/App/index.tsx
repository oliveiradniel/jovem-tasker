// import { useSaveTodos } from '../../hooks/useSaveTodos';

import Header from '../Header';

import { Container } from './styles';
import TodoList from '../TodoList';

export default function App() {
  // Monitoring all changes on todos and save in localStorage
  // useSaveTodos();

  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
}
