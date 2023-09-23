import styled from '@emotion/styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: -50px;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const IconLeft = styled(FaChevronLeft)`
  width: 16px;
  height: 16px;
`;

export const IconRight = styled(FaChevronRight)`
  width: 16px;
  height: 16px;
`;

export const DataButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 111.111%;
  margin-right: 8px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;

export const ChevronButton = styled.button`
  margin-left: 20px;
  margin-right: 6px;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;
