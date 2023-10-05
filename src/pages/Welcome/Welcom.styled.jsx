import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 52px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
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

export const SignUp = styled(Link)`
  margin-right: 14px;
  border-radius: 12px;
  padding: 12px 40px;
  background-color: ${props => props.theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.regular};
    background-color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const SignIn = styled(Link)`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 12px 40px;
  font-weight: 500;
  line-height: 112.5%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, border-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.regular};
    border-color: ${props => props.theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const Picture = styled.picture`
  position: absolute;
  top: 22%;
  left: 3%;
  z-index: -1;
  @media screen and (min-width: 768px) {
    top: 27.5%;
    left: 2%;
  }
  @media screen and (min-width: 1440px) {
    top: 40%;
    left: 5%;
  }
`;

export const Wrap = styled.div`
  height: 812px;
  @media screen and (min-width: 768px) {
    height: 1024px;
    overflow-x: hidden;
  }
  @media (min-width: 1440px) {
    height: 800px;
  }
`;
