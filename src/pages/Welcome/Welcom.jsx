import { Container, Header } from 'components';
import { Bg, Picture, SignIn, SignUp, Title, Wrapper } from './Welcom.styled';
import bg from 'images/bg';
const { lineD1x, lineD2x, lineM1x, lineM2x } = bg;

export default function Welcome() {
  return (
    <Container>
      <Header />
      <Title>Transforming your body shape with Power Pulse</Title>
      <Picture>
        <source
          type="image/png"
          media="(max-width: 767.99px)"
          srcSet={`${lineM1x} 1x, ${lineM2x} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${lineD1x} 1x, ${lineD2x} 2x`}
        />
        <img src={`${lineM1x}`} alt="logo" />
      </Picture>
      <Bg>
        <Wrapper>
          <SignUp href="/register" rel="noreferrer noopener">
            Sign Up
          </SignUp>
          <SignIn href="/login" rel="noreferrer noopener">
            Sign In
          </SignIn>
        </Wrapper>
      </Bg>
    </Container>
  );
}
