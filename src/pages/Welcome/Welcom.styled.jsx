import styled from '@emotion/styled';
import bg from 'images/bg';

const { bg1Desktop1x, bg1Desktop2x, bg1Mobile1x, bg1Mobile2x } = bg;

export const Wrapper = styled.div`
  display: flex;
`;

export const Bg = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center; */
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
  margin-top: 90px;
  font-size: 38px;
  font-weight: 500;
  line-height: 105.263%;
  letter-spacing: 0.38px;
  @media screen and (min-width: 768px) {
    margin-top: 140px;
    font-size: 70px;
    line-height: 111.429%;
    letter-spacing: 0.7px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 152px;
  }
`;
