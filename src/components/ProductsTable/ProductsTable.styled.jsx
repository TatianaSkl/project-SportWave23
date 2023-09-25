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
`;

export const ValueTd = styled.td`
  padding: 0;
  padding-bottom: 8px;
  &:not(:last-child) {
    padding-right: 8px;
  }
`;

export const WrapperT = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 204px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  @media (min-width: 1440px) {
    width: 212px;
  }
`;

export const WrapperCg = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 16px;
  line-height: 150%;
  padding: 6px 14px;
  width: 128px;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 1440px) {
    width: 165px;
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
    width: 105px;
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
    width: 105px;
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
  background-color: ${props => props.theme.colors.success};
  border-radius: 50%;
  margin-right: 8px;
`;
export const BoxColorText = styled.div`
  font-size: 14px;
  line-height: 128.571%;
`;

// const bgColorIsOnline = props => {
//   const { status, theme } = props;
//   switch (status) {
//     case true:
//       return theme.colors.green;
//     case false:
//       return theme.colors.red;
//     default:
//       return theme.colors.gray;
//   }
// };
