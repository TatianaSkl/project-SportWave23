import styled from '@emotion/styled';

export const PictureBg = styled.picture`
  position: absolute;
  width: 70%;
  top: 30%;
  left: 30%;
  z-index: -1;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 27%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 670px;
    top: 0;
    left: 54%;
    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);
  }
`;
