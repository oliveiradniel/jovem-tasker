import AddIcon from '../../assets/icons/add-task.svg?react';

import { Container } from './styles';

type ButtonProps = {
  disabled: boolean;
}

export default function Button({ disabled }: ButtonProps) {
  return (
    <Container
      type='submit'
      disabled={disabled}
    >
      <AddIcon />
    </Container>
  );
}
