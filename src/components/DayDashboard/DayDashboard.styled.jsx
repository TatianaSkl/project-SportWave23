import styled from '@emotion/styled';

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :first-of-type {
    margin-right: 13px;
    @media (min-width: 768px) {
      margin-right: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    display: block;
  }
`;

export const WrapperTablet = styled.div`
  @media (min-width: 768px) and (max-width: 1439px) {
    display: flex;
  }
`;

export const WrapperDaily = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    margin-bottom: 16px;
  }
`;

export const TextBox = styled.p`
  margin-left: 6px;
  color: rgba(239, 237, 232, 0.8);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 133.333%;
  @media (min-width: 768px) {
    margin-left: 8px;
    line-height: 150%;
  }
`;

export const TextBoxGrey = styled.p`
  margin-left: 8px;
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 133.333%;
  @media (min-width: 768px) {
    margin-left: 8px;
    line-height: 150%;
  }
`;

export const WrapperTime = styled.div`
  width: 100%;
  height: 96px;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const WrapperCalories = styled.div`
  width: 100%;
  margin-bottom: 20px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    margin-bottom: 16px;
  }
`;

export const WrapperRest = styled.div`
  width: 100%;
  height: 108px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
    margin-bottom: 16px;
  }
`;

export const Number = styled.p`
  margin-top: 28px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 18px;
  font-weight: 700;
  line-height: 111.111%;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;

export const WrapperWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    width: 593px;
    margin-top: 16px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    width: 390px;
    margin-top: 32px;
  }
`;

export const IconWarning = styled.svg`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.colors.beige};
  border-radius: 50%;
`;

export const TextWarning = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 128.571%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;
