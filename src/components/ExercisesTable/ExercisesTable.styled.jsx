import styled from '@emotion/styled';

export const Table = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    padding-right: 16px;
  }
  @media (min-width: 1440px) {
    padding-left: 16px;
  }
`;

export const TitleE = styled.th`
  color: ${props => props.theme.colors.accent};
  font-size: 12px;
  line-height: 150%;
  text-align: left;
  padding: 0 0 4px 0;
  overflow: hidden;
  white-space: nowrap;
  max-width: 80px;
`;

export const ValuTd = styled.td`
  padding: 0;
  padding-bottom: 8px;
  &:not(:last-child) {
    padding-right: 8px;
  }
`;

export const WrapperB = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  @media (min-width: 1440px) {
    width: 115px;
  }
`;

export const WrapperE = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 128px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 157px;
  }
`;

export const WrapperN = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 128px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 131px;
  }
`;

export const WrapperT = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 84px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 104px;
  }
`;

export const WrapperBc = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 78px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 95px;
  }
`;

export const WrapperTm = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 86px;
  }
`;

export const Btn = styled.div`
  margin-left: 4px;
`;

export const Box = styled.div`
  max-height: 696px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BoxTitle = styled.p`
  color: ${props => props.theme.colors.accent};
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 8px;
  white-space: nowrap;
`;

export const BoxText = styled.div`
  font-size: 14px;
  line-height: 128.571%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 10px 14px;
  margin-bottom: 16px;
`;

export const BoxFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & > :not(:last-child) {
    width: 80px;
    margin-right: 16px;
  }
`;
