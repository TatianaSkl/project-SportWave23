import styled from '@emotion/styled';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const WrapperDayExercises = styled.div`
  width: 100%;
  max-height: 824px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
  @media (min-width: 768px) {
    height: 234px;
    margin-bottom: 64px;
  }
  @media (min-width: 1440px) {
    width: 826px;
    margin-bottom: 0;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
`;

export const LinkExercises = styled(Link)`
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
  margin-bottom: 142px;
  margin-top: 125px;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 128.571%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-top: 65px;
    margin-bottom: 65px;
  }
`;

export const WrapperScrol = styled.div`
  overflow-y: auto;
  max-height: 824px;
  @media (min-width: 768px) {
    max-height: 160px;
  }
`;
