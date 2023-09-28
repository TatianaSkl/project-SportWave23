import styled from '@emotion/styled';

export const ProductList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FlexContainer = styled.div`
  overflow-y: auto;
  height: 600px;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(244, 243, 242, 0);
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(244, 243, 242, 0);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: auto;

    height: 600px;
    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;

    height: 620px;
  }
`;
