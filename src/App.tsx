import { useSaveTodos } from './hooks/useSaveTodos';

export default function App() {
  // Monitoring all changes on todos and save in localStorage
  useSaveTodos();

  return (
    <div>

    </div>
  );
}
