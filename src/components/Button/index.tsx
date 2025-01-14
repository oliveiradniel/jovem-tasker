import AddIcon from '../../assets/icons/add-task.svg?react';

import { Container } from './styles';

type ButtonProps = {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <Container>
      <button
        type='button'
        onClick={onClick}
      >
        <AddIcon />
      </button>
    </Container>
  );
}
