import { BackgroundImage, Button, Section, TextGrey, TitlePage } from 'components';
import { LinkSignUp, Question, Wrapper } from './SignIn.styled';

export default function SingIn() {
  return (
    <Section>
      <TitlePage text="Sign In" />
      <TextGrey text="Welcome! Please enter your credentials to login to the platform:" />
      <Button label="Sign In" />
      <Wrapper>
        <Question>Don’t have an account?</Question>
        <LinkSignUp to="/register">Sign Up</LinkSignUp>
      </Wrapper>
      <BackgroundImage />
    </Section>
  );
}
