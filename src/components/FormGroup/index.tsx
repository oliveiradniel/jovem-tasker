import { Container } from './styles';

type FormGroupProps = {
  error: string;
  children: React.ReactNode;
}

export default function FormGroup({ error, children }: FormGroupProps) {
  console.log(error);
  return (
    <Container>
      {children}
      {error && (<small>{error}</small>)}
    </Container>
  );
}
