import { ChangeEvent } from 'react';
import { Container } from './styles';

type InputProps = {
  value: string;
  placeholder: string;
  isError: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, placeholder, isError, onChange }: InputProps) {

  return (
    <Container
      type="text"
      placeholder={placeholder}
      value={value}
      $isError={isError}
      onChange={onChange}
    />
  );
}
