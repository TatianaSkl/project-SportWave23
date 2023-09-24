import styled from '@emotion/styled';

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperVideoCount = styled.div`
  /* margin-right: 14px; */
  position: absolute;
  top: 560px;
  left: 121px;
  height: 66px;
  width: 146px;
  padding: 14px 18px;
  border-radius: 12px;
  /* border: 1px solid rgba(239, 237, 232, 0.2); */
  background-color: ${props => props.theme.colors.statisticsVideo};
  @media (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
  }
`;

export const TextBox = styled.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.65);
  /* font-feature-settings: 'clig' off, 'liga' off; */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  @media (min-width: 768px) {
    margin-left: 8px;
    line-height: 150%;
  }
`;

export const WrapperTime = styled.div`
  position: absolute;
  top: 675px;
  right: 20px;
  width: 119px;
  height: 76px;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  @media (min-width: 768px) {
    width: 209px;
    height: 108px;
    padding: 14px 18px;
  }
`;

export const Number = styled.p`
  /* margin-top: 28px; */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 112.5%;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;

export const WrapperSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;
`;

export const NumberDinamic = styled.p`
  /* margin-top: 28px; */
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -1px;
  text-transform: uppercase;
  line-height: 100%;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;
