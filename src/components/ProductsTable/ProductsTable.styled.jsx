import styled from '@emotion/styled';

export const ProductTable = styled.div`
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

export const Title = styled.th`
  color: ${props => props.theme.colors.accent};
  font-size: 12px;
  line-height: 150%;
  text-align: left;
  padding: 0 0 4px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  /* display: -webkit-box; */
`;

export const ValueTd = styled.td`
  padding: 0;
  padding-bottom: 8px;
  &:not(:last-child) {
    padding-right: 8px;
  }
`;

export const WrapperT = styled.div`
  /* display: flex; */
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 202px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 210px;
  }
`;

export const WrapperCg = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 126px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 162px;
  }
`;

export const WrapperCl = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 90px;
  @media (min-width: 1440px) {
    width: 104px;
  }
`;

export const WrapperW = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 90px;
  @media (min-width: 1440px) {
    width: 104px;
  }
`;

export const WrapperR = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 80px;
  @media (min-width: 1440px) {
    width: 110px;
  }
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

export const BoxR = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 10px 14px;
  margin-bottom: 16px;
`;

export const BoxColor = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${props =>
    props.isRecommended ? props.theme.colors.success : props.theme.colors.error};
  border-radius: 50%;
  margin-right: 8px;
`;
export const BoxColorText = styled.div`
  font-size: 14px;
  line-height: 128.571%;
`;
