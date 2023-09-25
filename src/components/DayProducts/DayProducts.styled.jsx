import styled from '@emotion/styled';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const WrapperDayProduct = styled.div`
  width: 100%;
  height: 335px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    height: 234px;
    padding: 19px 16px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    width: 826px;
    margin-right: 32px;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
`;

export const LinkProducts = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.orange};
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const IconArrow = styled(AiOutlineArrowRight)`
  color: ${props => props.theme.colors.orange};
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 125px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 128.571%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-top: 65px;
  }
`;
