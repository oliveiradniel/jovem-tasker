import { useSaveTodos } from '../../hooks/useSaveTodos';
import Header from '../Header';
import { Container } from './styles';

export default function App() {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return (
    <Container>
      <Header />
    </Container>
  );
}
