import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  margin-top: 52px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const PictureBg = styled.picture`
  position: absolute;
  width: 70%;
  top: 80%;
  left: 30%;
  z-index: -1;
  background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 60%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 54%;
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
    width: 598px;
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
  top: 53%;
  left: 3%;
  z-index: -1;
  @media screen and (min-width: 768px) {
    top: 50%;
    left: 2%;
  }
  @media screen and (min-width: 1440px) {
    top: 52%;
    left: 5%;
  }
`;
