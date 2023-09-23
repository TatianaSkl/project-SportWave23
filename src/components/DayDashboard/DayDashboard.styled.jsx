import styled from '@emotion/styled';

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperCalor = styled.div`
  margin-right: 14px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
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

export const WrapperTime = styled.div`
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: ${props => props.theme.colors.orange};
  @media (min-width: 768px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
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

// export const IconWarning = styled(AiFillExclamationCircle)`
//   margin-right: 8px;
//   width: 24px;
//   height: 24px;
//   color: ${props => props.theme.colors.beige};
// `;

export const WrapperWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 40px;
  height: 73px;
  @media (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
    width: 439px;
    margin-left: auto;
    margin-right: auto;
  }
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
