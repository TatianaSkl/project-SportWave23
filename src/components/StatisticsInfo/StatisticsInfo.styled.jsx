import styled from '@emotion/styled';

// export const WrapperBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const WrapperVideoCount = styled.div`
  position: absolute;
  top: 560px;
  left: 121px;
  height: 66px;
  width: 146px;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.statisticsVideo};
  @media (min-width: 768px) {
    top: 714px;
    left: 331px;
    width: 206px;
    height: 96px;
    padding: 20px;
  }
  @media (min-width: 1440px) {
    top: 384px;
    left: 770px;
  }
`;

export const WrapperVideoCountTwo = styled.div`
  position: absolute;
  top: 600px;
  left: 160px;
  height: 66px;
  width: 146px;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.statisticsVideo};
  @media (min-width: 768px) {
    top: 714px;
    left: 331px;
    width: 206px;
    height: 96px;
    padding: 20px;
  }
  @media (min-width: 1440px) {
    top: 384px;
    left: 770px;
  }
`;

export const TextBox = styled.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const WrapperStatistics = styled.div`
  position: absolute;
  /* box-sizing: content-box; */
  top: 675px;
  right: 20px;
  width: 119px;
  height: 76px;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  @media (min-width: 768px) {
    top: 866px;
    right: 32px;
    width: 180px;
    height: 110px;
    padding: 14px 20px;
  }
  @media (min-width: 1440px) {
    top: 519px;
    left: 1228px;
  }
`;

export const Number = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 112.5%;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 100%;
  }
`;

export const WrapperSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  padding-left: 1px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
    padding-left: 2px;
  }
`;

export const NumberDinamic = styled.p`
  margin-top: 4px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -1px;
  /* width: 280px; */
  /* text-transform: uppercase; */
  line-height: 100%;
  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: 40px;
    line-height: 104.167%;
    letter-spacing: -1px;
  }
`;

export const Span = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const SvgRun = styled.svg`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const SvgPlay = styled.svg`
  width: 12px;
  height: 12px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
