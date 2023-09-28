import styled from '@emotion/styled';

export const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 657px;
  @media screen and (min-width: 768px) {
    height: 791px;
  }
  @media screen and (min-width: 1440px) {
    height: 556px;
  }
`;
