import { Container, Header } from 'components';
import { Picture, PictureBg, SignIn, SignUp, Title, Wrapper } from './Welcom.styled';
import bg from 'images/bg';
const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x, lineD1x, lineD2x, lineM1x, lineM2x } =
  bg;

export default function Welcome() {
  return (
    <Container>
      <Header />
      <Title>Transforming your body shape with Power Pulse</Title>
      <Picture>
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcSet={`${lineM1x} 1x, ${lineM2x} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${lineD1x} 1x, ${lineD2x} 2x`}
        />
        <img src={`${lineD1x}`} alt="logo" />
      </Picture>
      <Wrapper>
        <SignUp href="/register" rel="noreferrer noopener">
          Sign Up
        </SignUp>
        <SignIn href="/login" rel="noreferrer noopener">
          Sign In
        </SignIn>
      </Wrapper>
      <PictureBg>
        <source
          type="image/png"
          media="(max-width: 767px)"
          srcSet={`${bg1Mobile1x} 1x, ${bg1Mobile2x} 2x`}
        />
        <source
          type="image/png"
          media="(min-width: 768px)"
          srcSet={`${bg1Desktop1x} 1x, ${bg1Desktop2x} 2x`}
        />
        <img src={`${bg1Desktop1x}`} alt="logo" />
      </PictureBg>
    </Container>
  );
}
