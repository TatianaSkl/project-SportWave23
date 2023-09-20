import styled from '@emotion/styled';
import { HiMenuAlt1 } from 'react-icons/hi';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  @media (min-width: 768px) {
    padding: 19px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperDes = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const IconMenu = styled(HiMenuAlt1)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  @media (min-width: 768px) {
    margin-left: 16px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
