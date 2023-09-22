import styled from '@emotion/styled';

export const SectionProfile = styled.section`
  border-top: 1px solid rgba(239, 237, 232, 0.2);
  padding-top: 40px;
  padding-bottom: 66px;
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 72px;
    padding-bottom: 36px;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
