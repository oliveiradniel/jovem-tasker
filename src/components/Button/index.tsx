import AddIcon from '../../assets/icons/add.svg?react';

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
        Criar <AddIcon />
      </button>
    </Container>
  );
}
