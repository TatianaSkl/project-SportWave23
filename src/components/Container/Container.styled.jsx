import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    height: 800px;
    padding: 0 96px;
    width: 1440px;
  }
`;
