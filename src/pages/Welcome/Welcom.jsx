import { BackgroundImage, StatisticsInfo } from 'components';
import { Picture, SignIn, SignUp, Title, Wrapper } from './Welcom.styled';
import bg from 'images/bg';
const { lineD1x, lineD2x, lineM1x, lineM2x } = bg;

export default function Welcome() {
  return (
    <>
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
        <img src={`${lineD1x}`} alt="Рicture for decoration" />
      </Picture>
      <Wrapper>
        <SignUp to="register">Sign Up</SignUp>
        <SignIn to="login">Sign In</SignIn>
      </Wrapper>
      <StatisticsInfo />
      <BackgroundImage />
    </>
  );
}
