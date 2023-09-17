import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const Question = styled.p`
  margin-right: 2px;
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    padding-left: 7px;
  }
`;

export const LinkSignUp = styled(Link)`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
`;

export const PictureBg = styled.picture`
  position: absolute;
  width: 70%;
  top: 40%;
  left: 30%;
  z-index: -1;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 45%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    top: 0;
    left: 54%;
    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);
  }
`;
