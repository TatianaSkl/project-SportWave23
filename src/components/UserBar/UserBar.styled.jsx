import styled from '@emotion/styled';
import { FiSettings } from 'react-icons/fi';

export const WrapperUserBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    margin-left: 32px;
    margin-right: 16px;
  }
`;

export const IconSettings = styled(FiSettings)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.normal};
  @media (min-width: 768px) {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }
`;

export const WrapperFoto = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-color: ${props => props.theme.colors.orange};
  overflow: hidden;
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
`;
