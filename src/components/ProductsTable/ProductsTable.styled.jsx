import styled from '@emotion/styled';

export const Title = styled.th`
  color: ${props => props.theme.colors.accent};
  font-size: 12px;
  line-height: 150%;
  text-align: left;
  padding: 0 0 6px 0;
`;

export const Text = styled.td`
  padding: 0;
  /* &:not(:last-child) {
    font-style: normal;
    font-weight: 400;

    font-size: 14px;
    line-height: 128.571%;
    padding: 6px 0 6px 14px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  } */
`;

export const ProductTable = styled.div`
  padding-right: 6px;
  @media (min-width: 768px) {
    padding-right: 16px;
  }
  @media (min-width: 1440px) {
    padding-left: 16px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 128.571%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  /* padding: 6px 0 6px 14px; */
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const P = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
