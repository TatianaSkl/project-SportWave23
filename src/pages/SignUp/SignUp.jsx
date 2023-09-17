import { BackgroundImage, Button, Section, TextGrey, TitlePage } from 'components';
import { LinkSignIn, Question, Wrapper } from './SignUp.styled';

export default function SingUp() {
  return (
    <Section>
      <TitlePage text="Sign Up" />
      <TextGrey text="Thank you for your interest in our platform. To complete the registration process, please provide us with the following information." />
      <Button label="Sign Up" />
      <Wrapper>
        <Question>Already have account?</Question>
        <LinkSignIn to="/login">Sign In</LinkSignIn>
      </Wrapper>
      <BackgroundImage />
    </Section>
  );
}
