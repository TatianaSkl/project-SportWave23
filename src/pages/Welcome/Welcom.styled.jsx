import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import bg from 'images/bg';

const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x } = bg;

export const Wrapper = styled.div`
  margin-top: 52px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const Bg = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -80px;
  background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
    url(${bg1Mobile1x});
  @media screen and (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${bg1Mobile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${bg1Desktop1x});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
        url(${bg1Desktop2x});
    }
  }
`;

export const Title = styled.h1`
  padding-top: 90px;
  font-size: 38px;
  font-weight: 500;
  line-height: 105.263%;
  letter-spacing: 0.38px;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
    font-size: 70px;
    line-height: 111.429%;
    letter-spacing: 0.7px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 152px;
  }
`;

export const SignUp = styled.a`
  margin-right: 14px;
  border-radius: 12px;
  padding: 12px 40px;
  background: ${theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const SignIn = styled.a`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 12px 40px;
  font-weight: 500;
  line-height: 112.5%;
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const Picture = styled.picture`
  position: absolute;
  top: 19%;
  left: 3%;
  z-index: -1;
`;
