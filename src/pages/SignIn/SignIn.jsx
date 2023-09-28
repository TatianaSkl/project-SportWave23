import { Section, SignInForm, TextGrey, TitlePage } from 'components';
import { LinkSignUp, PictureBg, Question, Wrapper } from './SignIn.styled';
import bg from 'images/bg';
import { Wrap } from 'pages/Welcome/Welcom.styled';
const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x } = bg;

export default function SingIn() {
  return (
    <Wrap>
      <Section>
        <TitlePage text="Sign In" />
        <TextGrey text="Welcome! Please enter your credentials to login to the platform:" />
        <SignInForm />
        <Wrapper>
          <Question>Don’t have an account?</Question>
          <LinkSignUp to="/register">Sign Up</LinkSignUp>
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
