import { Section, SignUpForm, TextGrey, TitlePage } from 'components';
import { LinkSignIn, PictureBg, Question, Wrapper } from './SignUp.styled';
import bg from 'images/bg';
import { Wrap } from 'pages/Welcome/Welcom.styled';
const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x } = bg;

export default function SingUp() {
  return (
    <Wrap>
      <Section>
        <TitlePage text="Sign Up" />
        <TextGrey text="Thank you for your interest in our platform. To complete the registration process, please provide us with the following information." />
        <SignUpForm />
        <Wrapper>
          <Question>Already have account?</Question>
          <LinkSignIn to="/login">Sign In</LinkSignIn>
        </Wrapper>
        <PictureBg>
          <source
            type="image/jpg"
            media="(max-width: 767px)"
            srcSet={`${bg1Mobile1x} 1x, ${bg1Mobile2x} 2x`}
          />
          <source
            type="image/jpg"
            media="(min-width: 768px)"
            srcSet={`${bg1Desktop1x} 1x, ${bg1Desktop2x} 2x`}
          />
          <img src={`${bg1Desktop1x}`} alt="Woman doing sports" />
        </PictureBg>
      </Section>
    </Wrap>
  );
}
