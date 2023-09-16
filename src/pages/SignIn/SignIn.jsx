import {
  BackgroundImage,
  Button,
  Container,
  Header,
  Section,
  TextGrey,
  TitlePage,
} from 'components';
import { Link, Question, Wrapper } from './SignIn.styled';

export default function SingIn() {
  return (
    <Container>
      <Header />
      <Section>
        <TitlePage text="Sign In" />
        <TextGrey text="Welcome! Please enter your credentials to login to the platform:" />
        <Button label="Sign In" />
        <Wrapper>
          <Question>Don’t have an account?</Question>
          <Link href="/">Sign Up</Link>
        </Wrapper>
        <BackgroundImage />
      </Section>
    </Container>
  );
}
