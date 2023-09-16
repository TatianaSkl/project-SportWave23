import styled from '@emotion/styled';

export const PressButton = styled.button`
  padding: 12px 40px;
  border-radius: 12px;
  background: ${props => props.theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  box-shadow: ${props => props.theme.shadows.small};
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;
