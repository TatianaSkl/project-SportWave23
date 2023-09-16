import {
  BackgroundImage,
  Button,
  Container,
  Header,
  Section,
  TextGrey,
  TitlePage,
} from 'components';
import { Link, Question, Wrapper } from './SignUp.styled';

export default function SingUp() {
  return (
    <Container>
      <Header />
      <Section>
        <TitlePage text="Sign Up" />
        <TextGrey text="Thank you for your interest in our platform. To complete the registration process, please provide us with the following information." />
        <Button label="Sign Up" />
        <Wrapper>
          <Question>Already have account?</Question>
          <Link href="/">Sign In</Link>
        </Wrapper>
        <BackgroundImage />
      </Section>
    </Container>
  );
}
