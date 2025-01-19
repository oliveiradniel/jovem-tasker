import { ChangeEvent, useState } from 'react';

import TaskIcon from '../../assets/icons/task-input.svg?react';

import { Container, StyledInput } from './styles';

type InputProps = {
  value: string;
  placeholder: string;
  isError: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, placeholder, isError, onChange }: InputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <Container $isFocused={focus} $isError={isError} $isFilled={value.length > 0}>
      <TaskIcon />
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Container>
  );
}
