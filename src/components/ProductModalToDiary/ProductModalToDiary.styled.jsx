import styled from '@emotion/styled';

export const ModalForm = styled.form`
  padding: 48px 24px;
  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const InputTitle = styled.input`
  width: 100%;
  padding: 8px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  border-color: ${props => props.theme.colors.orange};
  color: rgba(239, 237, 232, 0.3);
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  outline: none;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 242px;
    font-size: 16px;
    line-height: 150%;
    margin-right: 16px;
  }
`;

export const InputGrams = styled.input`
  width: 100%;
  padding: 8px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  border-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  outline: none;
  margin-bottom: 16px;
  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
    text-align: right;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    line-height: 150%;
  }
  @media screen and (min-width: 768px) {
    width: 155px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Text = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  /* @media (min-width: 768px) {
    padding-right: 16px;
  }
  @media (min-width: 1440px) {
    padding-left: 16px;
  } */
`;

export const SpanText = styled.span`
  color: #efede8;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  /* @media (min-width: 768px) {
    padding-right: 16px;
  }
  @media (min-width: 1440px) {
    padding-left: 16px;
  } */
`;

export const AddButton = styled.button`
  padding: 12px 30px;
  border-radius: 12px;
  background: ${props => props.theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  font-size: 16px;
  margin-top: 24px;
  margin-right: 14px;
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
    margin-top: 64px;
    padding: 14px 32px;
    line-height: 150%;
    margin-right: 16px;
  }
`;

export const CancelButton = styled.button`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 12px 36px;
  font-weight: 500;
  line-height: 112.5%;
  font-size: 16px;
  margin-top: 24px;
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
    margin-top: 64px;
    padding: 1px 40px;
    font-size: 20px;
    line-height: 120%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  /* @media (min-width: 1440px) {
    padding-left: 16px;
  } */
`;
