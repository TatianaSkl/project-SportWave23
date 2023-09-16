import styled from '@emotion/styled';

export const ContainerError = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Wrapper = styled.div`
  width: 240px;
  padding: 0 20px 225px 20px;
  background: ${props => props.theme.colors.orange};
  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 0 32px 368px 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 0 96px 240px 96px;
  }
`;

export const HeaderError = styled.header`
  padding-top: 24px;
  @media (min-width: 768px) {
    padding-top: 32px;
  }
`;

export const PictureBg = styled.picture`
  position: absolute;
  width: 70%;
  top: 35%;
  left: 35%;
  z-index: -1;
  background-image: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 25%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 54%;
  }
`;

export const Title = styled.h2`
  padding-top: 213px;
  font-size: 66px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.66px;
  @media screen and (min-width: 768px) {
    padding-top: 260px;
    font-size: 160px;
    line-height: 93.75%;
    letter-spacing: 1.6px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 172px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 128.571%;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    margin-bottom: 44px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const GoHome = styled.a`
  margin-right: 14px;
  border-radius: 12px;
  padding: 12px 40px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: ${props => props.theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;
