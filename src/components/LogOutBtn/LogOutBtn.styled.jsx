import styled from '@emotion/styled';
import { FiLogOut } from 'react-icons/fi';

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 14px;
  line-height: 128.571%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;

export const IconLogOut = styled(FiLogOut)`
  margin-left: 8px;
  width: 20px;
  height: 20px;
  color: ${props => props.color || 'inherit'};
`;

export const IconLogOutDes = styled(FiLogOut)`
  margin-left: 8px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.orange};
`;
