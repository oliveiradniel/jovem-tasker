import AddIcon from '../../assets/icons/add-task.svg?react';

import { Container } from './styles';

type ButtonProps = {
  disabled: boolean;
  onClick: () => void;
}

export default function Button({ disabled, onClick }: ButtonProps) {
  return (
    <Container
      type='button'
      disabled={disabled}
      onClick={onClick}
    >
      <AddIcon />
    </Container>
  );
}
