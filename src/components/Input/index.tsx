import { ChangeEvent } from 'react';
import { Container } from './styles';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, placeholder, onChange }: InputProps) {
  return (
    <Container
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
